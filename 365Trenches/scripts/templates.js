const TOPPOSTTEMPLATE = `
<div class="post-image-container toppost-image-container"
    style="background-image:url('{{POST-IMAGE}}')">

</div>

<div class="toppost-details-container">
    <div class="category-container">
        <h6 class="category-title">{{POST-CATEGORY}}</h6>
    </div>
    <h1 class="post-title">{{POST-TITLE}}</h1>
    <p class="post-content">
       {{POST-CONTENT}}
    </p>

    <div class="author-container">

        <div class="author-profile-image"
            style="background-image:url('https://source.unsplash.com/random/?user')">

        </div>
        <div class="author-details">
            <h6>Muhammad Reza</h6>
            <span>{{POST-DATE}}</span>
        </div>

    </div>
</div>
`

const BLOGTEMPLATE = `
<div class="blog-post">
    <div>
        <div class="post-image-container blog-post-image" style="background-image:url('{{POST-IMAGE}}')"> </div>

        <div class="blog-post-details">

            <h2 class="post-title blog-post-title">{{POST-TITLE}}</h2>
            <div class="category-container">
                <h6 class="category-title">{{POST-CATEGORY}}</h6>
            </div>
            <p class="post-content">
                {{POST-CONTENT}}
            </p>
        </div>
    </div>


    <div class="author-container">

        <div class="author-profile-image" style="background-image:url('https://source.unsplash.com/random/?user')">

        </div>
        <div class="author-details">
            <h6>Muhammad Reza</h6>
            <span>{{POST-DATE}}</span>
        </div>

    </div>

</div>

`