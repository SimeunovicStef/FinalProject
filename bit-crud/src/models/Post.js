export class Post {
    constructor(postData) {
        this.id = postData.id;
        this.title = postData.title;
        this.imageUrl = 'https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/05/brow5bigstock-Programming-Works-105486218.jpg';
        this.text = postData.text;
        this.isPublic = postData.isPublic;
        this.userId = postData.userId;
    }
}
