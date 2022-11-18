package com.ezen.exit.dao;

import java.util.ArrayList;
import java.util.List;

import com.ezen.exit.domain.Reply;
import com.ezen.exit.domain.Tag;
import org.apache.ibatis.session.SqlSession;

import com.ezen.exit.Service;
import com.ezen.exit.domain.Page;
import com.ezen.exit.domain.Post;

public class PostDaoMyBatis implements PostDao {
    private SqlSession sqlSession;
    private Service service;

    @Override
    public void setSqlSession(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
        this.service = this.sqlSession.getMapper(Service.class);
    }

    @Override
    public void closeSession() {
        this.sqlSession.close();
    }

    @Override
    public void initTable() {
        dropTable();
        createTable();
        dropSeq();
        createSeq();
    }

    @Override
    public void createTable() {
        this.service.createPostTable();
        this.service.createTagTable();
        this.service.createPostTagTable();
        this.service.createReplyTable();
    }

    @Override
    public void dropTable() {
        this.service.deletePostTagFK("POST_FK");
        this.service.deletePostTagFK("TAG_FK");
        this.service.deleteReplyFK("REPLY_FK");
        this.service.dropTable("POST_TAG");
        this.service.dropTable("REPLY");
        this.service.dropTable("POST");
        this.service.dropTable("TAG");
    }

    @Override
    public void createSeq() {
        this.service.createSeq("POST_SEQ");
        this.service.createSeq("TAG_SEQ");
        this.service.createSeq("REPLY_SEQ");
    }

    @Override
    public void dropSeq() {
        this.service.dropSeq("POST_SEQ");
        this.service.dropSeq("TAG_SEQ");
        this.service.dropSeq("REPLY_SEQ");
    }

    @Override
    public void insert(Post post) {
        this.service.insertPost(post);
        for (String tag : post.getTag()) {
            Tag t = this.service.getTagByName(tag);
            if (t == null) {
                this.service.insertTag(tag);
                t = this.service.getTagByName(tag);
            }
            this.service.insertPostTag(post.getNum(), t.getTag_id());
        }
    }

    @Override
    public Post select(int post_id) {
        Post post = this.service.selectPost(post_id);
        post.setTag(this.service.getPostTags(post.getNum()));
        return post;
    }

    @Override
    public List<Post> selectAll(String table_name) {
        ArrayList<Post> posts = this.service.selectAll(table_name);
        for (Post post : posts) {
            post.setTag(this.service.getPostTags(post.getNum()));
        }
        return posts;
    }

    @Override
    public void deleteAll() {
        this.service.deleteAll("POST");
        this.service.deleteAll("POST_TAG");
        this.service.deleteAll("TAG");
    }

    @Override
    public int getCount() {
        return this.service.getCount();
    }

    @Override
    public Page getPage(int currentPage) {
        int totalPage = service.getCount();
        
        int from = (currentPage - 1) * Page.getPerpage() + 1;
        int to = currentPage * Page.getPerpage();
        List<Post> posts = service.getPage(from, to);

        return new Page(posts, currentPage, totalPage);
    }

    @Override
    public void addHit(int post_id) {
        this.service.addHit(post_id);
    }

    @Override
    public void update(Post post) {
        this.service.updatePost(post);
        this.service.deletePostTag(post.getNum());
        for (String tag : post.getTag()) {
            Tag t = this.service.getTagByName(tag);
            if (t == null) {
                this.service.insertTag(tag);
                t = this.service.getTagByName(tag);
            }
            this.service.insertPostTag(post.getNum(), t.getTag_id());
        }
    }

    @Override
    public void delete(int post_id) {
        this.service.deletePost(post_id);
    }

    @Override
    public List<Post> getMonthlyBest() {
        return this.service.getMonthlyBest();
    }

    @Override
    public List<Post> getWeeklyBest() {
        return this.service.getWeeklyBest();
    }

    @Override
    public List<Post> getDailyBest() {
        return this.service.getDailyBest();
    }

    @Override
    public int getReplyCount() {
        return this.service.getReplyCount();
    }

    @Override
	public void insertReply(Reply reply) {
        // this.service.pushReply(reply.getRoot(), reply.getOrd());
        this.service.insertReply(reply);
    }

    @Override
    public Reply getReplyByReplyId(int replyId) {
        return this.service.getReplyByReplyId(replyId);
    }

    @Override
    public List<Reply> getRepliesByPostId(int postId) {
        return this.service.getRepliesByPostId(postId);
    }
}
