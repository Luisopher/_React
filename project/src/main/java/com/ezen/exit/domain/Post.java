package com.ezen.exit.domain;

import java.util.ArrayList;

public class Post {
	private int num;
	private String title;
	private String content;
	private int hits;
	private ArrayList<String> tag;
	private String writedate;
	private int recommend;
	private int decommend;
	private String writer;

	public Post() {
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getHits() {
		return hits;
	}

	public void setHits(int hits) {
		this.hits = hits;
	}

	public ArrayList<String> getTag() {
	
		return tag;
	}

	public void setTag(ArrayList<String> tag) {
		
		this.tag = tag;
	}

	public String getWritedate() {
		return writedate;
	}

	public void setWritedate(String writedate) {
		this.writedate = writedate;
	}

	public int getRecommend() {
		return recommend;
	}

	public void setRecommend(int recommend) {
		this.recommend = recommend;
	}

	public int getDecommend() {
		return decommend;
	}

	public void setDecommend(int decommend) {
		this.decommend = decommend;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}
}
