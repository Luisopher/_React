package com.ezen.exit;

import com.ezen.exit.dao.PostDao;
import com.ezen.exit.dao.PostDaoMyBatis;
import com.ezen.exit.domain.Reply;
import com.ezen.exit.domain.Post;
import org.apache.ibatis.session.SqlSessionFactory;
import org.hamcrest.core.Is;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(locations = "/test-applicationContext.xml")
public class PostDaoTest {
    @Autowired
    private SqlSessionFactory sqlSessionFactory;

    private PostDao postDao;
    
    private Post post1;
    private Post post2;
    private Post post3;

    private Reply reply1;
    private Reply reply2;
    private Reply reply3;
    
    @BeforeEach
    public void setUp() throws ParseException {
        this.postDao = new PostDaoMyBatis();
        this.postDao.setSqlSession(sqlSessionFactory.openSession());

        postDao.dropTable();
        postDao.createTable();

        postDao.dropSeq();
        postDao.createSeq();

        this.post1 = new Post();
        post1.setTitle("TvkmcM2rk4");
        post1.setContent("oQGPphmRlX");
        ArrayList<String> tags1 = parseJson("[{\"value\":\"asd\"},{\"value\":\"asda\"},{\"value\":\"dasdasda\"}]");
        post1.setTag(tags1);
        post1.setWriter("xLCg17kv3E");
        this.post2 = new Post();
        post2.setTitle("SFEXlGyMwu");
        post2.setContent("rpRJDXh5Ay");
        ArrayList<String> tags2 = new ArrayList<>();
        tags2.add("sfwtfShMJd");
        post2.setTag(tags2);
        post2.setWriter("lh52oMoXHu");
        this.post3 = new Post();
        post3.setTitle("BhSwkk1c4n");
        post3.setContent("x0PDshOdgI");
        ArrayList<String> tags3 = new ArrayList<>();
        tags3.add("q8x07S5KNG");
        tags3.add("sfwtfShMJd");
        post3.setTag(tags3);
        post3.setWriter("VBQoNxAKqO");

        this.reply1 = new Reply();
        reply1.setPostId(1);
        reply1.setWriter("rYnoq6xqHd");
        reply1.setContent("BaCy324Uh0");
        reply1.setRoot(1);
        reply1.setOrd(0);
        reply1.setIndent(0);
        this.reply2 = new Reply();
        reply2.setPostId(1);
        reply2.setWriter("cGVWkTmKNx");
        reply2.setContent("RCtOWEeBT0");
        reply2.setRoot(2);
        reply2.setOrd(1);
        reply2.setIndent(0);
        this.reply3 = new Reply();
        reply3.setPostId(1);
        reply3.setWriter("hug1iY3HQF");
        reply3.setContent("r5cLPAcvxA");
        reply3.setRoot(3);
        reply3.setOrd(2);
        reply3.setIndent(0);
    }

    @AfterEach
    public void setDown() {
        this.postDao.closeSession();
    }
    
    @Test
    public void insertAndSelect() {
        assertThat(postDao.getCount(), is(0));

        postDao.insert(post1);
        postDao.insert(post2);
        postDao.insert(post3);
        assertThat(postDao.getCount(), is(3));

        Post postget1 = postDao.select(1);
        Post postget2 = postDao.select(2);
        Post postget3 = postDao.select(3);

        assertThat(postget1.getTitle(), is(post1.getTitle()));
        assertThat(postget1.getContent(), is(post1.getContent()));
        assertThat(postget1.getTag(), is(post1.getTag()));

        assertThat(postget2.getTitle(), is(post2.getTitle()));
        assertThat(postget2.getContent(), is(post2.getContent()));
        assertThat(postget2.getTag(), is(post2.getTag()));

        assertThat(postget3.getTitle(), is(post3.getTitle()));
        assertThat(postget3.getContent(), is(post3.getContent()));
        assertThat(postget3.getTag(), is(post3.getTag()));
    }

    @Test
    public void count() {
        postDao.deleteAll();
        assertThat(postDao.getCount(), Is.is(0));

        postDao.insert(post1);
        assertThat(postDao.getCount(), Is.is(1));

        postDao.insert(post2);
        assertThat(postDao.getCount(), Is.is(2));

        postDao.insert(post3);
        assertThat(postDao.getCount(), Is.is(3));
    }

    @Test
    public void selectAll() {
        postDao.deleteAll();

        List<Post> users0 = postDao.selectAll("POST");
        assertThat(users0.size(), Is.is(0));

        postDao.insert(post1);
        List<Post> users1 = postDao.selectAll("POST");
        assertThat(users1.size(), Is.is(1));
        checkSamePost(post1, users1.get(0));

        postDao.insert(post2);
        List<Post> users2 = postDao.selectAll("POST");
        assertThat(users2.size(), Is.is(2));
        checkSamePost(post2, users2.get(0));
        checkSamePost(post1, users2.get(1));

        postDao.insert(post3);
        List<Post> users3 = postDao.selectAll("POST");
        assertThat(users3.size(), Is.is(3));
        checkSamePost(post3, users3.get(0));
        checkSamePost(post2, users3.get(1));
        checkSamePost(post1, users3.get(2));
    }

    private void checkSamePost(Post lhs, Post rhs) {
        assertThat(lhs.getTitle(), Is.is(rhs.getTitle()));
        assertThat(lhs.getContent(), Is.is(rhs.getContent()));
        assertThat(lhs.getTag(), Is.is(rhs.getTag()));
        assertThat(lhs.getWriter(), Is.is(rhs.getWriter()));
    }

    @Test
    public void addHit() {
        postDao.insert(post1);
        postDao.insert(post2);
        Post getpost1 = postDao.select(1);
        Post getpost2 = postDao.select(2);
        assertThat(getpost1.getHits(), is(0));
        assertThat(getpost2.getHits(), is(0));

        postDao.addHit(1);

        getpost1 = postDao.select(1);
        getpost2 = postDao.select(2);
        assertThat(getpost1.getHits(), is(1));
        assertThat(getpost2.getHits(), is(0));

        postDao.addHit(2);

        getpost1 = postDao.select(1);
        getpost2 = postDao.select(2);
        assertThat(getpost1.getHits(), is(1));
        assertThat(getpost2.getHits(), is(1));
    }

    @Test
    public void tagInsert() {
        postDao.insert(post1);
        postDao.insert(post2);

        Post postget1 = postDao.select(post1.getNum());
        Post postget2 = postDao.select(post2.getNum());

        checkSamePost(postget1, post1);
        checkSamePost(postget2, post2);
    }

    public ArrayList<String> parseJson(String json) throws ParseException {
        JSONParser parser = new JSONParser();
        JSONArray jsonArray = (JSONArray) parser.parse(json);

        ArrayList<String> tags = new ArrayList<>();

        for (Object o :jsonArray) {
            tags.add((String)((JSONObject)o).get("value"));
        }

        return tags;
    }

    @Test
    public void update() {
        assertThat(postDao.getCount(), is(0));

        postDao.insert(post1);
        assertThat(postDao.getCount(), is(1));

        Post postget1 = postDao.select(post1.getNum());
        checkSamePost(postget1, post1);

        post2.setNum(post1.getNum());
        postDao.update(post2);

        postget1 = postDao.select(post1.getNum());
        assertThat(postget1.getTitle(), is(post2.getTitle()));
        assertThat(postget1.getContent(), is(post2.getContent()));
        assertThat(postget1.getTag(), is(post2.getTag()));
    }

    @Test
    public void addAndGetComment() {
        assertThat(postDao.getReplyCount(), is(0));
        postDao.insert(post1);

        postDao.insertReply(reply1);
        postDao.insertReply(reply2);
        postDao.insertReply(reply3);
        assertThat(postDao.getReplyCount(), is(3));

        Reply replyGet1 = postDao.getReplyByReplyId(1);
        Reply replyGet2 = postDao.getReplyByReplyId(2);
        Reply replyGet3 = postDao.getReplyByReplyId(3);

        checkSameReply(reply1, replyGet1);
        checkSameReply(reply2, replyGet2);
        checkSameReply(reply3, replyGet3);
    }

    private void checkSameReply(Reply lhs, Reply rhs) {
        assertThat(lhs.getPostId(), Is.is(rhs.getPostId()));
        assertThat(lhs.getWriter(), Is.is(rhs.getWriter()));
        assertThat(lhs.getContent(), Is.is(rhs.getContent()));
        assertThat(lhs.getRoot(), Is.is(rhs.getRoot()));
        assertThat(lhs.getOrd(), Is.is(rhs.getOrd()));
        assertThat(lhs.getIndent(), Is.is(rhs.getIndent()));
    }
}
