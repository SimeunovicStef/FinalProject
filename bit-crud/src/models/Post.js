export class Post {
    constructor(postData) {
        this.id = postData.id;
        this.title = postData.title;
        this.imageUrl = postData.imageUrl || 'https://sklvrn.ru/assets/images/image-placeholder.jpg';
        this.text = postData.text;
        this.isPublic = postData.isPublic;
    }
}
