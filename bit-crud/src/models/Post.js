export class Post {
    constructor(postData) {
        this.id = postData.id;
        this.title = postData.title;
        this.imageUrl = 'https://miro.medium.com/max/1117/0*VqAxdjpbk3gZzubM';
        this.text = postData.text;
        this.isPublic = postData.isPublic;
        this.userId = postData.userId;
    }
}
