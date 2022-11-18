package com.ezen.exit.domain;

import java.util.List;

public class Page {
    private final List<Post> posts;
    private final int currentPage;
    private final int totalPage;

    public Page(List<Post> posts, int currentPage, int totalPage) {
        this.posts = posts;
        this.currentPage = currentPage;
        this.totalPage = totalPage;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public static int getPerpage() {
        return 10;
    } 
}
