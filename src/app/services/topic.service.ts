import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { Post } from '../models/post';

//recherche sur cypres
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }
  
  topic1: Topic = {'id':1, 'name':'hello1', posts: []}
  topic2: Topic = {'id':2, 'name':'hello2', posts: []}
  topics: Topic[] = [this.topic1, this.topic2];
  
  getAll(): Topic[]{
    return this.topics;
  }
  get(topicId: number): Topic | undefined{
    return this.topics.find(topic => topic.id === topicId);
  }
  addTopic(topic: Topic): void{
    this.topics.push(topic);
  }
  addPost(post: Post, topicId: number): void{
    const topic = this.get(topicId);
    if(!!topic){
      if (!topic.posts) {
        topic.posts = [];
      }
      topic.posts.push(post);
    }
  }

}
