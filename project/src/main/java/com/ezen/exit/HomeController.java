package com.ezen.exit;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ezen.exit.dao.PostDao;
import com.ezen.exit.domain.Page;
import com.ezen.exit.domain.Post;
import com.ezen.exit.domain.Reply;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {
    @Autowired
    private PostDao postDao;

    public ArrayList<String> parseJson(String json) throws ParseException {
        JSONParser parser = new JSONParser();
        JSONArray jsonArray = (JSONArray) parser.parse(json);

        ArrayList<String> tags = new ArrayList<>();

        for (Object o :jsonArray) {
            tags.add((String)((JSONObject)o).get("value"));
        }

        return tags;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String window() {
        return "window";
    }

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public String home(Model model) {
        model.addAttribute("monthlyBest", postDao.getMonthlyBest());
        model.addAttribute("weeklyBest", postDao.getWeeklyBest());
        model.addAttribute("dailyBest", postDao.getDailyBest());

        return "main";
    }


    @RequestMapping(value = "/resetTable", method = RequestMethod.GET)
    public String main() {
        postDao.initTable();
        return "redirect:/";
    }

    @RequestMapping(value = "/write", method = RequestMethod.GET)
    public String input() {
        return "write";
    }
    
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        return "login";
    }
    
    //yusejin �� �ǵ帲 ..; �ڿ� method �κ� POST GET �򰥷��� �� ������..������;;
    @RequestMapping(value = "/mainOK", method = RequestMethod.GET)
    public String mainOK(Model model) {
    	model.addAttribute("monthlyBest", postDao.getMonthlyBest());
    	model.addAttribute("weeklyBest", postDao.getWeeklyBest());
    	model.addAttribute("dailyBest", postDao.getDailyBest());
    	
    	return "/member/mainOK";
    }
    @RequestMapping(value = "/logout")
    public String logout() {
        return "logout";
    }
    
    @RequestMapping(value = "/form")
    public String form() {
        return "form";
    }
    
    @RequestMapping(value = "/session", method = RequestMethod.POST)
    public String session() {
        return "session";
    }


    @RequestMapping(value = "/insertPost", method = RequestMethod.POST)
    public String insert(HttpServletRequest request) {
        String title = request.getParameter("title");
        String content = request.getParameter("sample");
        String json = request.getParameter("tag");
        ArrayList<String> tags;
        try {
            tags = parseJson(json);
        } catch (ParseException e) {
            tags = new ArrayList<>();
        }
        String writer = request.getParameter("writer");

        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);
        post.setTag(tags);
        post.setWriter(writer);

        postDao.insert(post);

        return "redirect:board";
    }

    @RequestMapping(value = "/board", method = RequestMethod.GET)
    public String board(HttpServletRequest request, Model model) {
        int currentPage;
        try {
            currentPage = Integer.parseInt(request.getParameter("page"));
        } catch (Exception e) {
            currentPage = 1;
        }

        Page page = postDao.getPage(currentPage);

        model.addAttribute("posts", page.getPosts());
        model.addAttribute("page", page);

        return "board";
    }
    
    @RequestMapping(value = "/posting")
    public String posting(HttpServletRequest request, Model model) {
        int post_id = Integer.parseInt(request.getParameter("num"));
        postDao.addHit(post_id);

        model.addAttribute("post", postDao.select(post_id));
        model.addAttribute("replies", postDao.getRepliesByPostId(post_id));
        
        return "posting";
    }

    @RequestMapping(value = "/update", method = RequestMethod.GET)
    public String update(HttpServletRequest request, Model model) {
        int post_id = Integer.parseInt(request.getParameter("num"));
        model.addAttribute("post", postDao.select(post_id));
        
        return "update";
    }
    
    @RequestMapping(value = "/updatePost", method = RequestMethod.POST)
    public String updatePost(HttpServletRequest request) {
        int num = Integer.parseInt(request.getParameter("num"));
        String title = request.getParameter("title");
        String content = request.getParameter("content");
        String json = request.getParameter("tag");
        ArrayList<String> tags;
        try {
            tags = parseJson(json);
        } catch (ParseException e) {
            tags = new ArrayList<>();
        }

        Post post = new Post();
        post.setNum(num);
        post.setTitle(title);
        post.setContent(content);
		post.setTag(tags);
        System.out.println("test" + tags);
        postDao.update(post);
        
        return "redirect:board";
    }
    
    @RequestMapping(value = "/delete")
    public String delete(HttpServletRequest request) {
        int post_id = Integer.parseInt(request.getParameter("num"));
        postDao.delete(post_id);
        
        return "redirect:board";
    }

    @RequestMapping(value = "/addReply")
    public String addReply(HttpServletRequest request) {
        int post_id = Integer.parseInt(request.getParameter("num"));
        String writer = request.getParameter("replyname");
        String content = request.getParameter("sample");

        Reply reply = new Reply();
        reply.setPostId(post_id);
        reply.setWriter(writer);
        reply.setContent(content);

        System.out.println(post_id);
        System.out.println(writer);
        System.out.println(content);
        
        postDao.insertReply(reply);

        return "redirect:posting?num=" + post_id;
    }
}
