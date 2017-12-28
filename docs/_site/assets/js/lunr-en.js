var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Quick-Start Guide",
      excerpt: "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Structure",
      excerpt: "Nothing clever here :wink:. Layouts, data files, and includes are all placed in their default locations. Stylesheets and scripts in...",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Installation",
      excerpt: "Install the Theme 1. For a new site, install the minimal-mistakes-jekyll theme gem or fork the Minimal Mistakes repo on...",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Upgrading",
      excerpt: "If you’re using the Ruby Gem version of the theme upgrading is fairly painless. Simply run bundle update if you’re...",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Configuration",
      excerpt: "Settings that affect your entire site can be changed in Jekyll’s configuration file: _config.yml, found in the root of your...",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Overriding Theme Defaults",
      excerpt: "When installing the theme as a Ruby Gem its layouts, includes, stylesheets, and other assets are all bundled in the...",
      categories: [],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Navigation",
      excerpt: "Masthead The masthead links use a “priority plus” design pattern. Meaning, show as many navigation items that will fit horizontally...",
      categories: [],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "UI Text",
      excerpt: "Text for various UI elements, _layouts, and _includes have all been grouped together as a set of translation keys. This...",
      categories: [],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "Authors",
      excerpt: "Sites that may have content authored from various individuals can be accommodated by using data files. To assign an author...",
      categories: [],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "Layouts",
      excerpt: "The bread and butter of any theme. Below you’ll find the layouts included with Minimal Mistakes, what they look like...",
      categories: [],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "Working with Posts",
      excerpt: "Posts are stored in the _posts directory and named according to the YEAR-MONTH-DAY-title.MARKUP format as per the usual. Where YEAR...",
      categories: [],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Working with Pages",
      excerpt: "To better organize all of your pages you can centralize them into a single location similar to posts and collections....",
      categories: [],
      tags: [],
      id: 11
    });
    
  
    idx.add({
      title: "Working with Collections",
      excerpt: "Collections like posts and pages work as you’d expect. If you’re new to them be sure to read Jekyll’s documentation....",
      categories: [],
      tags: [],
      id: 12
    });
    
  
    idx.add({
      title: "Helpers",
      excerpt: "You can think of these Jekyll helpers as little shortcuts. Since GitHub Pages doesn’t allow most plugins — custom tags...",
      categories: [],
      tags: [],
      id: 13
    });
    
  
    idx.add({
      title: "Utility Classes",
      excerpt: "Using the Kramdown Markdown renderer with Jekyll allows you to add block and inline attributes. This is nice if you...",
      categories: [],
      tags: [],
      id: 14
    });
    
  
    idx.add({
      title: "Stylesheets",
      excerpt: "The theme’s assets/css/main.css file is built from several SCSS partials located in _sass/ and is structured as follows: minimal-mistakes ├──...",
      categories: [],
      tags: [],
      id: 15
    });
    
  
    idx.add({
      title: "JavaScript",
      excerpt: "The theme’s [assets/js/main.min.js] script is built from several vendor, jQuery plugins, and other scripts found in assets/js/. minimal mistakes ├──...",
      categories: [],
      tags: [],
      id: 16
    });
    
  
    idx.add({
      title: "History",
      excerpt: "Unreleased Enhancements Add linkback functionality to author avatar and name in sidebar via author.home. #1386 4.8.0 Enhancements Open social share...",
      categories: [],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "Contributing",
      excerpt: "Having trouble working with the theme? Found a typo in the documentation? Interested in adding a feature or fixing a...",
      categories: [],
      tags: [],
      id: 18
    });
    
  
    idx.add({
      title: "2.2 Documentation",
      excerpt: "Installation Minimal Mistakes now requires Jekyll 3.0. Make sure to run bundle update if you aren’t on the latest version...",
      categories: [],
      tags: [],
      id: 19
    });
    
  
    idx.add({
      title: "License",
      excerpt: "The MIT License (MIT) Copyright (c) 2013-2017 Michael Rose and contributors Permission is hereby granted, free of charge, to any...",
      categories: [],
      tags: [],
      id: 20
    });
    
  

  
  
    idx.add({
      title: "Lhasa Apso",
      excerpt: "The Lhasa Apso (/ˈlɑːsə ˈæpsoʊ/ lah-sə ap-soh) is a non-sporting dog breed originating in Tibet. It was bred as an...",
      categories: [],
      tags: [],
      id: 21
    });
    
  
    idx.add({
      title: "Tabby",
      excerpt: "A tabby is any domestic cat that has a coat featuring distinctive stripes, dots, lines or swirling patterns, usually together...",
      categories: [],
      tags: [],
      id: 22
    });
    
  

  
  
    idx.add({
      title: "Baz Boom Identity",
      excerpt: "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
      categories: [],
      tags: [],
      id: 23
    });
    
  
    idx.add({
      title: "Fizz Bang Identity",
      excerpt: "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
      categories: [],
      tags: [],
      id: 24
    });
    
  
    idx.add({
      title: "Foo Bar Identity",
      excerpt: "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
      categories: [],
      tags: [],
      id: 25
    });
    
  
    idx.add({
      title: "Ginger Gulp Identity",
      excerpt: "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
      categories: [],
      tags: [],
      id: 26
    });
    
  

  
  
    idx.add({
      title: "Edge Case: Nested and Mixed Lists",
      excerpt: "Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do...",
      categories: ["Edge Case"],
      tags: ["content","css","edge case","lists","markup"],
      id: 27
    });
    
  
    idx.add({
      title: "Edge Case: Many Tags",
      excerpt: "This post has many tags.\n",
      categories: ["Edge Case"],
      tags: ["8BIT","alignment","Articles","captions","categories","chat","comments","content","css","dowork","edge case","embeds","excerpt","Fail","featured image","FTW","Fun","gallery","html","image","Jekyll","layout","link","Love","markup","Mothership","Must Read","Nailed It","Pictures","Post Formats","quote","standard","Success","Swagger","Tags","template","title","twitter","Unseen","video","YouTube"],
      id: 28
    });
    
  
    idx.add({
      title: "Edge Case: Many Categories",
      excerpt: "This post has many categories.\n",
      categories: ["aciform","antiquarianism","arrangement","asmodeus","broder","buying","championship","chastening","disinclination","disinfection","dispatch","echappee","enphagy"],
      tags: ["categories","edge case"],
      id: 29
    });
    
  
    idx.add({
      title: "Edge Case: No Body Content",
      excerpt: "\n",
      categories: ["Edge Case"],
      tags: ["content","edge case","layout"],
      id: 30
    });
    
  
    idx.add({
      title: "Edge Case No Yaml Title",
      excerpt: "This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.\n",
      categories: ["Edge Case"],
      tags: ["edge case","layout","title"],
      id: 31
    });
    
  
    idx.add({
      title: "Antidisestablishmentarianism",
      excerpt: "Title should not overflow the content area A few things to check for: Non-breaking text in the title, content, and...",
      categories: ["Edge Case"],
      tags: ["content","css","edge case","html","layout","title"],
      id: 32
    });
    
  
    idx.add({
      title: "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
      excerpt: "Check for long titles and how they might break a template.\n",
      categories: ["Edge Case"],
      tags: ["content","css","edge case","html","layout","title"],
      id: 33
    });
    
  
    idx.add({
      title: "Post: Modified Date",
      excerpt: "This post has been updated and should show a modified date if used in a layout. All children, except one,...",
      categories: ["Post Formats"],
      tags: ["Post Formats","readability","standard"],
      id: 34
    });
    
  
    idx.add({
      title: "Post: Standard",
      excerpt: "All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was...",
      categories: ["Post Formats"],
      tags: ["Post Formats","readability","standard"],
      id: 35
    });
    
  
    idx.add({
      title: "Post: Chat",
      excerpt: "Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames....",
      categories: ["Post Formats"],
      tags: ["chat","Post Formats"],
      id: 36
    });
    
  
    idx.add({
      title: "Post: Notice",
      excerpt: "A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown...",
      categories: ["Post Formats"],
      tags: ["Post Formats","notice"],
      id: 37
    });
    
  
    idx.add({
      title: "Post: Quote",
      excerpt: "Only one thing is impossible for God: To find any sense in any copyright law on the planet. Mark Twain...",
      categories: ["Post Formats"],
      tags: ["Post Formats","quote"],
      id: 38
    });
    
  
    idx.add({
      title: "Post: Link",
      excerpt: "This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML...",
      categories: ["Post Formats"],
      tags: ["link","Post Formats"],
      id: 39
    });
    
  
    idx.add({
      title: "Post: Video (YouTube)",
      excerpt: "YouTube video embed below.\n\n\n",
      categories: ["Post Formats"],
      tags: ["Post Formats"],
      id: 40
    });
    
  
    idx.add({
      title: "Post: Header Image with OpenGraph Override",
      excerpt: "This post has a header image with an OpenGraph override.\n\nheader:\n  image: /assets/images/page-header-image.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","image","layout"],
      id: 41
    });
    
  
    idx.add({
      title: "Post: Overlay Image with OpenGraph Override",
      excerpt: "This post has a header image with an OpenGraph override. header: overlay_image: /assets/images/unsplash-image-1.jpg og_image: /assets/images/page-header-og-image.png caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\" cta_url:...",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","image","layout"],
      id: 42
    });
    
  
    idx.add({
      title: "Post: Image (with Link)",
      excerpt: "\n",
      categories: ["Post Formats"],
      tags: ["image","Post Formats"],
      id: 43
    });
    
  
    idx.add({
      title: "Post: Image (Standard)",
      excerpt: "The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path....",
      categories: ["Post Formats"],
      tags: ["image","Post Formats"],
      id: 44
    });
    
  
    idx.add({
      title: "Post: Teaser Image with OpenGraph Override",
      excerpt: "This post has a teaser image with an OpenGraph override.\n\nheader:\n  teaser: /assets/images/page-header-teaser.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","image","layout"],
      id: 45
    });
    
  
    idx.add({
      title: "Post: Image (Linked with Caption)",
      excerpt: "\n\n  \n\n\n  \nStairs? Were we’re going we don’t need no stairs.\n\n\n",
      categories: ["Post Formats"],
      tags: ["image","Post Formats"],
      id: 46
    });
    
  
    idx.add({
      title: "Post: Image (Caption)",
      excerpt: "\n\n  \n\n\n  Photo from Unsplash.\n\n",
      categories: ["Post Formats"],
      tags: ["image","Post Formats"],
      id: 47
    });
    
  
    idx.add({
      title: "Post: Gallery",
      excerpt: "These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter:...",
      categories: ["Post Formats"],
      tags: ["gallery","Post Formats","tiled"],
      id: 48
    });
    
  
    idx.add({
      title: "Post: Twitter Embed",
      excerpt: "🎨 Finally got around to adding all my @procreateapp creations with time lapse videos https://t.co/1nNbkefC3L pic.twitter.com/gcNLJoJ0Gn&mdash; Michael Rose (@mmistakes) November...",
      categories: ["Media"],
      tags: ["content","embeds","media","twitter"],
      id: 49
    });
    
  
    idx.add({
      title: "Layout: Comments Disabled",
      excerpt: "This post has its comments disabled.\n\nThere should be no comment form.\n",
      categories: ["Layout","Uncategorized"],
      tags: ["comments","layout"],
      id: 50
    });
    
  
    idx.add({
      title: "Layout: Comments Enabled",
      excerpt: "This post should display comments.\n",
      categories: ["Layout","Uncategorized"],
      tags: ["comments","layout"],
      id: 51
    });
    
  
    idx.add({
      title: "Layout: Read Time Disabled",
      excerpt: "This post has reading time disabled. The estimated time that it takes to read this post should not be showing...",
      categories: [],
      tags: ["read time"],
      id: 52
    });
    
  
    idx.add({
      title: "Layout: Read Time Enabled",
      excerpt: "This post has reading time enabled. The estimated time that it takes to read this post should show if also...",
      categories: [],
      tags: ["read time"],
      id: 53
    });
    
  
    idx.add({
      title: "Layout: Related Posts Disabled",
      excerpt: "This post has related posts disabled.\n\nRelated post links should not appear.\n",
      categories: ["Layout","Uncategorized"],
      tags: ["related posts","layout"],
      id: 54
    });
    
  
    idx.add({
      title: "Layout: Related Posts Enabled",
      excerpt: "This post has related posts enabled.\n",
      categories: ["Layout","Uncategorized"],
      tags: ["related posts","layout"],
      id: 55
    });
    
  
    idx.add({
      title: "Layout: Social Sharing Links Disabled",
      excerpt: "This post has social sharing disabled.\n\nSocial sharing links should not appear.\n",
      categories: ["Layout","Uncategorized"],
      tags: ["social","layout"],
      id: 56
    });
    
  
    idx.add({
      title: "Layout: Social Sharing Links Enabled",
      excerpt: "This post should display social sharing links.\n",
      categories: ["Layout","Uncategorized"],
      tags: ["social","layout"],
      id: 57
    });
    
  
    idx.add({
      title: "Layout: Reading Time, Comments, Social Sharing Links, and Related Posts Disabled",
      excerpt: "This post has reading time, comments, social sharing links, and related posts disabled. Reading time, comments, social sharing and related...",
      categories: ["Layout","Uncategorized"],
      tags: ["related posts","social","comments","layout"],
      id: 58
    });
    
  
    idx.add({
      title: "Layout: Post with Table Of Contents",
      excerpt: "Enable table of contents on post or page by adding toc: true to its YAML Front Matter. The title and...",
      categories: [],
      tags: ["table of contents"],
      id: 59
    });
    
  
    idx.add({
      title: "Layout: Code Excerpt (Generated)",
      excerpt: "This is the post content with inline code, (e.g. &lt;span style=\"color: red;\"&gt;red&lt;/span&gt;. It should be displayed in place of the...",
      categories: ["Layout","Uncategorized"],
      tags: ["content","excerpt","layout"],
      id: 60
    });
    
  
    idx.add({
      title: "Layout: Excerpt (Defined)",
      excerpt: "This is the post content. It should be displayed in place of the user-defined excerpt in archive-index pages. This paragraph...",
      categories: ["Layout","Uncategorized"],
      tags: ["content","excerpt","layout"],
      id: 61
    });
    
  
    idx.add({
      title: "Layout: Excerpt (Generated)",
      excerpt: "This is the post content. Archive-index pages should display an auto-generated excerpt of this content. Be sure to test the...",
      categories: ["Layout","Uncategorized"],
      tags: ["content","excerpt","layout"],
      id: 62
    });
    
  
    idx.add({
      title: "Layout: Author Override",
      excerpt: "Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author...",
      categories: [],
      tags: [],
      id: 63
    });
    
  
    idx.add({
      title: "Layout: Author Sidebar Disabled",
      excerpt: "This post has the author sidebar disabled.\n\nTo disable add author_profile: false to YAML Front Matter.\n",
      categories: [],
      tags: [],
      id: 64
    });
    
  
    idx.add({
      title: "Layout: Header Image (External URL)",
      excerpt: "This post should display a header image, if the theme supports it. Featured image is an external asset and should...",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","featured image","image","layout"],
      id: 65
    });
    
  
    idx.add({
      title: "Layout: Header Image (Horizontal)",
      excerpt: "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues....",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","featured image","image","layout"],
      id: 66
    });
    
  
    idx.add({
      title: "Layout: Header Image and Text Readability",
      excerpt: "This is a sample post with a large feature image1 up top and tons of text. Odio ad blue bottle...",
      categories: [],
      tags: ["sample post","readability","test"],
      id: 67
    });
    
  
    idx.add({
      title: "Layout: Header Image (Vertical)",
      excerpt: "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues. This...",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","featured image","image","layout"],
      id: 68
    });
    
  
    idx.add({
      title: "Layout: Header Overlay with Background Fill",
      excerpt: "This post should display a header with a solid background color, if the theme supports it. Non-square images can provide...",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","image","layout"],
      id: 69
    });
    
  
    idx.add({
      title: "Layout: Header Image Overlay",
      excerpt: "This post should display a header with an overlay image, if the theme supports it. Non-square images can provide some...",
      categories: ["Layout","Uncategorized"],
      tags: ["edge case","image","layout"],
      id: 70
    });
    
  
    idx.add({
      title: "Layout: More Tag",
      excerpt: "This content is before the excerpt separator tag. Right after this sentence there should be a continue reading link of...",
      categories: ["Layout","Uncategorized"],
      tags: ["content","read more","layout"],
      id: 71
    });
    
  
    idx.add({
      title: "Layout: Sidebar Custom",
      excerpt: "This post has a custom sidebar set in the post’s YAML Front Matter. An example of how that YAML could...",
      categories: [],
      tags: [],
      id: 72
    });
    
  
    idx.add({
      title: "Layout: Sidebar with Navigation List",
      excerpt: "This post has a custom navigation list set in the post’s YAML Front Matter. sidebar: title: \"Sample Title\" nav: sidebar-sample...",
      categories: [],
      tags: [],
      id: 73
    });
    
  
    idx.add({
      title: "Markup: Text Readability Test",
      excerpt: "Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle...",
      categories: [],
      tags: ["sample post","readability","test"],
      id: 74
    });
    
  
    idx.add({
      title: "Markup: Title *with* **Markdown**",
      excerpt: "Verify that: The post title renders the word “with” in italics and the word “Markdown” in bold. The post title...",
      categories: ["Markdown"],
      tags: ["css","html","title"],
      id: 75
    });
    
  
    idx.add({
      title: "Markup: Title with Special&nbsp;---&nbsp;Characters",
      excerpt: "Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the...",
      categories: ["Markup"],
      tags: ["html","markup","post","title"],
      id: 76
    });
    
  
    idx.add({
      title: "Markup: Text Alignment",
      excerpt: "Default This is a paragraph. It should not have any alignment of any kind. It should just flow like you...",
      categories: ["Markup"],
      tags: ["alignment","content","css","markup"],
      id: 77
    });
    
  
    idx.add({
      title: "Markup: Image Alignment",
      excerpt: "Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is...",
      categories: ["Markup"],
      tags: ["alignment","captions","content","css","image","markup"],
      id: 78
    });
    
  
    idx.add({
      title: "Markup: HTML Tags and Formatting",
      excerpt: "A variety of common markup showing how the theme styles them. Header two Header three Header four Header five Header...",
      categories: ["Markup"],
      tags: ["content","css","formatting","html","markup"],
      id: 79
    });
    
  
    idx.add({
      title: "Markup: Another Post with Images",
      excerpt: "Here are some examples of what a post with images might look like. If you want to display two or...",
      categories: [],
      tags: ["sample post","images","test"],
      id: 80
    });
    
  
    idx.add({
      title: "Markup: Syntax Highlighting",
      excerpt: "Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms....",
      categories: [],
      tags: ["code","syntax highlighting"],
      id: 81
    });
    
  
    idx.add({
      title: "Welcome to Jekyll!",
      excerpt: "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
      categories: ["Jekyll"],
      tags: ["update"],
      id: 82
    });
    
  
    idx.add({
      title: "Gemified Theme -- Alpha Release",
      excerpt: "Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days...",
      categories: ["Jekyll"],
      tags: ["update"],
      id: 83
    });
    
  
    idx.add({
      title: "Gemified Theme -- Beta Release",
      excerpt: "Hot on the heels of Jekyll v3.3.0 is a beta release of Minimal Mistakes… as a gemified theme. minimal-mistakes-jekyll can...",
      categories: ["Jekyll"],
      tags: ["update"],
      id: 84
    });
    
  
    idx.add({
      title: "Layout: Header Video",
      excerpt: "This post should display a header with a responsive video, if the theme supports it. Settings Parameter Required Description id...",
      categories: ["Layout","Uncategorized"],
      tags: ["video","layout"],
      id: 85
    });
    
  

  
  
    idx.add({
      title: "Chocolate Chip Cookies",
      excerpt: "A chocolate chip cookie is a drop cookie that originated in the United States and features chocolate chips as its...",
      categories: [],
      tags: [],
      id: 86
    });
    
  
    idx.add({
      title: "Oatmeal Cookies",
      excerpt: "Oatmeal cookies are a proverbial favorite with both kids and adults. This crisp and chewy cookie is loaded with oats,...",
      categories: [],
      tags: [],
      id: 87
    });
    
  
    idx.add({
      title: "Peanut Butter Cookies",
      excerpt: "A peanut butter cookie is a type of cookie that is distinguished for having peanut butter as a principal ingredient....",
      categories: [],
      tags: [],
      id: 88
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Quick-Start Guide",
        "url": "http://localhost:4000/minimal-mistakes/docs/quick-start-guide/",
        "excerpt": "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Structure",
        "url": "http://localhost:4000/minimal-mistakes/docs/structure/",
        "excerpt": "Nothing clever here :wink:. Layouts, data files, and includes are all placed in their default locations. Stylesheets and scripts in...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Installation",
        "url": "http://localhost:4000/minimal-mistakes/docs/installation/",
        "excerpt": "Install the Theme 1. For a new site, install the minimal-mistakes-jekyll theme gem or fork the Minimal Mistakes repo on...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Upgrading",
        "url": "http://localhost:4000/minimal-mistakes/docs/upgrading/",
        "excerpt": "If you’re using the Ruby Gem version of the theme upgrading is fairly painless. Simply run bundle update if you’re...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Configuration",
        "url": "http://localhost:4000/minimal-mistakes/docs/configuration/",
        "excerpt": "Settings that affect your entire site can be changed in Jekyll’s configuration file: _config.yml, found in the root of your...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Overriding Theme Defaults",
        "url": "http://localhost:4000/minimal-mistakes/docs/overriding-theme-defaults/",
        "excerpt": "When installing the theme as a Ruby Gem its layouts, includes, stylesheets, and other assets are all bundled in the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Navigation",
        "url": "http://localhost:4000/minimal-mistakes/docs/navigation/",
        "excerpt": "Masthead The masthead links use a “priority plus” design pattern. Meaning, show as many navigation items that will fit horizontally...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "UI Text",
        "url": "http://localhost:4000/minimal-mistakes/docs/ui-text/",
        "excerpt": "Text for various UI elements, _layouts, and _includes have all been grouped together as a set of translation keys. This...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Authors",
        "url": "http://localhost:4000/minimal-mistakes/docs/authors/",
        "excerpt": "Sites that may have content authored from various individuals can be accommodated by using data files. To assign an author...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layouts",
        "url": "http://localhost:4000/minimal-mistakes/docs/layouts/",
        "excerpt": "The bread and butter of any theme. Below you’ll find the layouts included with Minimal Mistakes, what they look like...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Working with Posts",
        "url": "http://localhost:4000/minimal-mistakes/docs/posts/",
        "excerpt": "Posts are stored in the _posts directory and named according to the YEAR-MONTH-DAY-title.MARKUP format as per the usual. Where YEAR...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Working with Pages",
        "url": "http://localhost:4000/minimal-mistakes/docs/pages/",
        "excerpt": "To better organize all of your pages you can centralize them into a single location similar to posts and collections....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Working with Collections",
        "url": "http://localhost:4000/minimal-mistakes/docs/collections/",
        "excerpt": "Collections like posts and pages work as you’d expect. If you’re new to them be sure to read Jekyll’s documentation....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Helpers",
        "url": "http://localhost:4000/minimal-mistakes/docs/helpers/",
        "excerpt": "You can think of these Jekyll helpers as little shortcuts. Since GitHub Pages doesn’t allow most plugins — custom tags...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Utility Classes",
        "url": "http://localhost:4000/minimal-mistakes/docs/utility-classes/",
        "excerpt": "Using the Kramdown Markdown renderer with Jekyll allows you to add block and inline attributes. This is nice if you...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Stylesheets",
        "url": "http://localhost:4000/minimal-mistakes/docs/stylesheets/",
        "excerpt": "The theme’s assets/css/main.css file is built from several SCSS partials located in _sass/ and is structured as follows: minimal-mistakes ├──...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "JavaScript",
        "url": "http://localhost:4000/minimal-mistakes/docs/javascript/",
        "excerpt": "The theme’s [assets/js/main.min.js] script is built from several vendor, jQuery plugins, and other scripts found in assets/js/. minimal mistakes ├──...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "History",
        "url": "http://localhost:4000/minimal-mistakes/docs/history/",
        "excerpt": "Unreleased Enhancements Add linkback functionality to author avatar and name in sidebar via author.home. #1386 4.8.0 Enhancements Open social share...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Contributing",
        "url": "http://localhost:4000/minimal-mistakes/docs/contributing/",
        "excerpt": "Having trouble working with the theme? Found a typo in the documentation? Interested in adding a feature or fixing a...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "2.2 Documentation",
        "url": "http://localhost:4000/minimal-mistakes/docs/docs-2-2/",
        "excerpt": "Installation Minimal Mistakes now requires Jekyll 3.0. Make sure to run bundle update if you aren’t on the latest version...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "License",
        "url": "http://localhost:4000/minimal-mistakes/docs/license/",
        "excerpt": "The MIT License (MIT) Copyright (c) 2013-2017 Michael Rose and contributors Permission is hereby granted, free of charge, to any...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Lhasa Apso",
        "url": "http://localhost:4000/minimal-mistakes/pets/lhasa-apso/",
        "excerpt": "The Lhasa Apso (/ˈlɑːsə ˈæpsoʊ/ lah-sə ap-soh) is a non-sporting dog breed originating in Tibet. It was bred as an...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Tabby",
        "url": "http://localhost:4000/minimal-mistakes/pets/tabby/",
        "excerpt": "A tabby is any domestic cat that has a coat featuring distinctive stripes, dots, lines or swirling patterns, usually together...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Baz Boom Identity",
        "url": "http://localhost:4000/minimal-mistakes/portfolio/baz-boom-identity/",
        "excerpt": "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
        "teaser":
          
            "http://localhost:4000/minimal-mistakes/assets/images/unsplash-gallery-image-1-th.jpg"
          
      },
    
      
      {
        "title": "Fizz Bang Identity",
        "url": "http://localhost:4000/minimal-mistakes/portfolio/fizz-bang-identity/",
        "excerpt": "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
        "teaser":
          
            "http://localhost:4000/minimal-mistakes/assets/images/unsplash-gallery-image-2-th.jpg"
          
      },
    
      
      {
        "title": "Foo Bar Identity",
        "url": "http://localhost:4000/minimal-mistakes/portfolio/foo-bar-website/",
        "excerpt": "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
        "teaser":
          
            "http://localhost:4000/minimal-mistakes/assets/images/foo-bar-identity-th.jpg"
          
      },
    
      
      {
        "title": "Ginger Gulp Identity",
        "url": "http://localhost:4000/minimal-mistakes/portfolio/ginger-gulp-identity/",
        "excerpt": "Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single...",
        "teaser":
          
            "http://localhost:4000/minimal-mistakes/assets/images/unsplash-gallery-image-3-th.jpg"
          
      },
    
  
    
    
    
      
      {
        "title": "Edge Case: Nested and Mixed Lists",
        "url": "http://localhost:4000/minimal-mistakes/edge%20case/edge-case-nested-and-mixed-lists/",
        "excerpt": "Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: Many Tags",
        "url": "http://localhost:4000/minimal-mistakes/edge%20case/edge-case-many-tags/",
        "excerpt": "This post has many tags.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: Many Categories",
        "url": "http://localhost:4000/minimal-mistakes/aciform/antiquarianism/arrangement/asmodeus/broder/buying/championship/chastening/disinclination/disinfection/dispatch/echappee/enphagy/edge-case-many-categories/",
        "excerpt": "This post has many categories.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: No Body Content",
        "url": "http://localhost:4000/minimal-mistakes/edge%20case/edge-case-no-body-content/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case No Yaml Title",
        "url": "http://localhost:4000/minimal-mistakes/edge%20case/edge-case-no-yaml-title/",
        "excerpt": "This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Antidisestablishmentarianism",
        "url": "http://localhost:4000/minimal-mistakes/edge%20case/edge-case-title-should-not-overflow-the-content-area/",
        "excerpt": "Title should not overflow the content area A few things to check for: Non-breaking text in the title, content, and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
        "url": "http://localhost:4000/minimal-mistakes/edge%20case/edge-case-very-long-title/",
        "excerpt": "Check for long titles and how they might break a template.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Modified Date",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-modified/",
        "excerpt": "This post has been updated and should show a modified date if used in a layout. All children, except one,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Standard",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-standard/",
        "excerpt": "All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Chat",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-chat/",
        "excerpt": "Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Notice",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-notice/",
        "excerpt": "A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Quote",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-quote/",
        "excerpt": "Only one thing is impossible for God: To find any sense in any copyright law on the planet. Mark Twain...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Link",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-link/",
        "excerpt": "This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Video (YouTube)",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-video-youtube/",
        "excerpt": "YouTube video embed below.\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Header Image with OpenGraph Override",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/post-header-image-og-override/",
        "excerpt": "This post has a header image with an OpenGraph override.\n\nheader:\n  image: /assets/images/page-header-image.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Overlay Image with OpenGraph Override",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/post-header-overlay-image-og-override/",
        "excerpt": "This post has a header image with an OpenGraph override. header: overlay_image: /assets/images/unsplash-image-1.jpg og_image: /assets/images/page-header-og-image.png caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\" cta_url:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (with Link)",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-image-linked/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (Standard)",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-image-standard/",
        "excerpt": "The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Teaser Image with OpenGraph Override",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/post-teaser-image-og-override/",
        "excerpt": "This post has a teaser image with an OpenGraph override.\n\nheader:\n  teaser: /assets/images/page-header-teaser.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
        "teaser":
          
            "http://localhost:4000/minimal-mistakes/assets/images/page-header-teaser.png"
          
      },
    
      
      {
        "title": "Post: Image (Linked with Caption)",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-image-linked-caption/",
        "excerpt": "\n\n  \n\n\n  \nStairs? Were we’re going we don’t need no stairs.\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (Caption)",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-image-caption/",
        "excerpt": "\n\n  \n\n\n  Photo from Unsplash.\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Gallery",
        "url": "http://localhost:4000/minimal-mistakes/post%20formats/post-gallery/",
        "excerpt": "These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Twitter Embed",
        "url": "http://localhost:4000/minimal-mistakes/media/post-twitter-embeds/",
        "excerpt": "🎨 Finally got around to adding all my @procreateapp creations with time lapse videos https://t.co/1nNbkefC3L pic.twitter.com/gcNLJoJ0Gn&mdash; Michael Rose (@mmistakes) November...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Comments Disabled",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-comments-disabled/",
        "excerpt": "This post has its comments disabled.\n\nThere should be no comment form.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Comments Enabled",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-comments/",
        "excerpt": "This post should display comments.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Read Time Disabled",
        "url": "http://localhost:4000/minimal-mistakes/layout-read-time-disabled/",
        "excerpt": "This post has reading time disabled. The estimated time that it takes to read this post should not be showing...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Read Time Enabled",
        "url": "http://localhost:4000/minimal-mistakes/layout-read-time/",
        "excerpt": "This post has reading time enabled. The estimated time that it takes to read this post should show if also...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Related Posts Disabled",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-related-posts-disabled/",
        "excerpt": "This post has related posts disabled.\n\nRelated post links should not appear.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Related Posts Enabled",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-related-posts/",
        "excerpt": "This post has related posts enabled.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Social Sharing Links Disabled",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-sharing-disabled/",
        "excerpt": "This post has social sharing disabled.\n\nSocial sharing links should not appear.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Social Sharing Links Enabled",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-sharing/",
        "excerpt": "This post should display social sharing links.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Reading Time, Comments, Social Sharing Links, and Related Posts Disabled",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-read-time-comments-sharing-related-posts-disabled/",
        "excerpt": "This post has reading time, comments, social sharing links, and related posts disabled. Reading time, comments, social sharing and related...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Post with Table Of Contents",
        "url": "http://localhost:4000/minimal-mistakes/layout-table-of-contents-post/",
        "excerpt": "Enable table of contents on post or page by adding toc: true to its YAML Front Matter. The title and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Code Excerpt (Generated)",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-code-excerpt-generated/",
        "excerpt": "This is the post content with inline code, (e.g. &lt;span style=\"color: red;\"&gt;red&lt;/span&gt;. It should be displayed in place of the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Excerpt (Defined)",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-excerpt-defined/",
        "excerpt": "This is the post content. It should be displayed in place of the user-defined excerpt in archive-index pages. This paragraph...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Excerpt (Generated)",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-excerpt-generated/",
        "excerpt": "This is the post content. Archive-index pages should display an auto-generated excerpt of this content. Be sure to test the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Author Override",
        "url": "http://localhost:4000/minimal-mistakes/layout-author-override/",
        "excerpt": "Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Author Sidebar Disabled",
        "url": "http://localhost:4000/minimal-mistakes/layout-author-sidebar-disabled/",
        "excerpt": "This post has the author sidebar disabled.\n\nTo disable add author_profile: false to YAML Front Matter.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (External URL)",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-header-image-external/",
        "excerpt": "This post should display a header image, if the theme supports it. Featured image is an external asset and should...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (Horizontal)",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-header-image-horizontal/",
        "excerpt": "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image and Text Readability",
        "url": "http://localhost:4000/minimal-mistakes/layout-header-image-text-readability/",
        "excerpt": "This is a sample post with a large feature image1 up top and tons of text. Odio ad blue bottle...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (Vertical)",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-header-image-vertical/",
        "excerpt": "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues. This...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Overlay with Background Fill",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-header-overlay-color/",
        "excerpt": "This post should display a header with a solid background color, if the theme supports it. Non-square images can provide...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image Overlay",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-header-overlay-image/",
        "excerpt": "This post should display a header with an overlay image, if the theme supports it. Non-square images can provide some...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: More Tag",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-more-tag/",
        "excerpt": "This content is before the excerpt separator tag. Right after this sentence there should be a continue reading link of...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Sidebar Custom",
        "url": "http://localhost:4000/minimal-mistakes/layout-sidebar-custom/",
        "excerpt": "This post has a custom sidebar set in the post’s YAML Front Matter. An example of how that YAML could...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Sidebar with Navigation List",
        "url": "http://localhost:4000/minimal-mistakes/layout-sidebar-nav-list/",
        "excerpt": "This post has a custom navigation list set in the post’s YAML Front Matter. sidebar: title: \"Sample Title\" nav: sidebar-sample...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Text Readability Test",
        "url": "http://localhost:4000/minimal-mistakes/markup-text-readability/",
        "excerpt": "Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Title *with* **Markdown**",
        "url": "http://localhost:4000/minimal-mistakes/markdown/markup-title-with-markup/",
        "excerpt": "Verify that: The post title renders the word “with” in italics and the word “Markdown” in bold. The post title...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Title with Special&nbsp;---&nbsp;Characters",
        "url": "http://localhost:4000/minimal-mistakes/markup/markup-title-with-special-characters/",
        "excerpt": "Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Text Alignment",
        "url": "http://localhost:4000/minimal-mistakes/markup/markup-text-alignment/",
        "excerpt": "Default This is a paragraph. It should not have any alignment of any kind. It should just flow like you...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Image Alignment",
        "url": "http://localhost:4000/minimal-mistakes/markup/markup-image-alignment/",
        "excerpt": "Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: HTML Tags and Formatting",
        "url": "http://localhost:4000/minimal-mistakes/markup/markup-html-tags-and-formatting/",
        "excerpt": "A variety of common markup showing how the theme styles them. Header two Header three Header four Header five Header...",
        "teaser":
          
            "http://localhost:4000/minimal-mistakes/assets/images/markup-syntax-highlighting-teaser.jpg"
          
      },
    
      
      {
        "title": "Markup: Another Post with Images",
        "url": "http://localhost:4000/minimal-mistakes/markup-more-images/",
        "excerpt": "Here are some examples of what a post with images might look like. If you want to display two or...",
        "teaser":
          
            "http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"
          
      },
    
      
      {
        "title": "Markup: Syntax Highlighting",
        "url": "http://localhost:4000/minimal-mistakes/markup-syntax-highlighting/",
        "excerpt": "Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms....",
        "teaser":
          
            "http://localhost:4000/minimal-mistakes/assets/images/markup-syntax-highlighting-teaser.jpg"
          
      },
    
      
      {
        "title": "Welcome to Jekyll!",
        "url": "http://localhost:4000/minimal-mistakes/jekyll/welcome-to-jekyll/",
        "excerpt": "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
        "teaser":
          
            "https://farm5.staticflickr.com/4076/4940499208_b79b77fb0a_z.jpg"
          
      },
    
      
      {
        "title": "Gemified Theme -- Alpha Release",
        "url": "http://localhost:4000/minimal-mistakes/jekyll/gemified-theme-alpha/",
        "excerpt": "Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Gemified Theme -- Beta Release",
        "url": "http://localhost:4000/minimal-mistakes/jekyll/gemified-theme-beta/",
        "excerpt": "Hot on the heels of Jekyll v3.3.0 is a beta release of Minimal Mistakes… as a gemified theme. minimal-mistakes-jekyll can...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Video",
        "url": "http://localhost:4000/minimal-mistakes/layout/uncategorized/layout-header-video/",
        "excerpt": "This post should display a header with a responsive video, if the theme supports it. Settings Parameter Required Description id...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Chocolate Chip Cookies",
        "url": "http://localhost:4000/minimal-mistakes/recipes/chocolate-chip-cookies/",
        "excerpt": "A chocolate chip cookie is a drop cookie that originated in the United States and features chocolate chips as its...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Oatmeal Cookies",
        "url": "http://localhost:4000/minimal-mistakes/recipes/oatmeal-cookies/",
        "excerpt": "Oatmeal cookies are a proverbial favorite with both kids and adults. This crisp and chewy cookie is loaded with oats,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Peanut Butter Cookies",
        "url": "http://localhost:4000/minimal-mistakes/recipes/peanut-butter-cookies/",
        "excerpt": "A peanut butter cookie is a type of cookie that is distinguished for having peanut butter as a principal ingredient....",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
