package com.ezen.exit;

import java.util.ArrayList;

import com.ezen.exit.domain.Reply;
import com.ezen.exit.domain.Post;
import com.ezen.exit.domain.Tag;


public interface Service {
    void createPostTable();
    void createPostTagTable();
    void createTagTable();
    void dropTable(String table_name);
    void createSeq(String seq_name);
    void dropSeq(String seq_name);
    void deletePostTagFK(String fkName);
    void deleteReplyFK(String fkName);

    void insertPost(Post post);
    Post selectPost(int num);
    ArrayList<Post> selectAll(String table_name);
    void deleteAll(String table_name);
    int getCount();

    ArrayList<Post> getPage(int from, int to);
    ArrayList<Post> getHotPost();
    void updatePost(Post post);
    void deletePost(int num);
    void addHit(int num);
    ArrayList<Post> getMonthlyBest();
    ArrayList<Post> getWeeklyBest();
    ArrayList<Post> getDailyBest();

    Tag getTagById(int tag_id);
    Tag getTagByName(String tag_name);
    ArrayList<Post> getTaggedPost(int tag_id);
    ArrayList<String> getPostTags(int post_id);
    void insertTag(String tag_name);
    void insertPostTag(int post_id, int tag_id);
    void deletePostTag(int post_id);

    void createReplyTable();
    int getReplyCount();
    void insertReply(Reply reply);
    void pushReply(int root, int ord);
    Reply getReplyByReplyId(int replyId);
    ArrayList<Reply> getRepliesByPostId(int postId);
}