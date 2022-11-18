package com.ezen.exit.dao;

import java.util.List;

import com.ezen.exit.domain.Reply;
import com.ezen.exit.domain.Page;
import com.ezen.exit.domain.Post;
import org.apache.ibatis.session.SqlSession;

public interface PostDao {
    void setSqlSession(SqlSession sqlSession);
    void closeSession();

    void initTable();
    void createTable();
    void dropTable();
    void createSeq();
    void dropSeq();

    void insert(Post post);
    Post select(int post_id);
    List<Post> selectAll(String table_name);
    void deleteAll();
    int getCount();

    Page getPage(int currentPage);
    void addHit(int post_id);
    void update(Post post);
    void delete(int post_id);

    List<Post> getMonthlyBest();
    List<Post> getWeeklyBest();
    List<Post> getDailyBest();

    int getReplyCount();
    void insertReply(Reply reply);
    Reply getReplyByReplyId(int replyId);
    List<Reply> getRepliesByPostId(int postId);
}
