function validateTitle(title) {
    if (title.length < 3 || title.length > 30) {
        document.querySelector(".inputTitle").classList.add(".InvalidInput")
        document.querySelector(".inputTitle").setAttribute("title", "Title must be min 3 and max 30 character long")
        return false
    }
    return true
}

function validateSubtitle(subtitle) {
    if (subtitle.length < 3 || subtitle.length > 50) {
        document.querySelector(".inputSubtitle").classList.add(".InvalidInput")
        document.querySelector(".inputSubtitle").setAttribute("title", "Subtitles must be min 3 and max 50 characters long")
        return false
    }
    return true
}

function validateContent(content) {
    if (content) {
        if (content[0] === content[0].toUpperCase() && content.indexOf(".") === -1) {
            document.querySelector(".inputPostText").classList.add(".InvalidInput")
            document.querySelector(".inputPostText").setAttribute("title", "Content must be min one sentence long")
            return false
        }
        else if (content[0] !== content[0].toUpperCase()) {
            document.querySelector(".inputPostText").classList.add(".InvalidInput")
            document.querySelector(".inputPostText").setAttribute("title", "Content must start with capital letter")
            return false
        }
    }
    else {
        document.querySelector(".inputPostText").classList.add(".InvalidInput")
        document.querySelector(".inputPostText").setAttribute("title", "Cannot be empty ")
        return false
    }
    return true

}

function validatePost(title, subtitle, content) {

    const titleValidation = validateTitle(title)
    const subtitleValidation = validateSubtitle(subtitle)
    const contentValidation = validateContent(content)

    if (titleValidation === true && subtitleValidation === true && contentValidation === true) {
        return true
    }
    return false

}

export default validatePost