# Mobile static edit button

Add an edit button to pages on your website if a cookie is present. Designed for mobile use.

You can read more about this script in [Adding an edit button to my static site on mobile](https://...)

## How to Set Up

First, clone this repository:

```
git clone https://github.com/capjamesg/mobile-static-edit-button
```

Then, open `edit.js`. You will need to make a few edits.

Update the `/mobile-edit` path with the path that you want to use to enable your button. There doesn't have to be a page at that path, but the page must load the script to set the cookie used to track if the user is in edit mode.

Then, update the repository name and paths with the ones that are relevant to your website. You can use the default code if your site uses either `/YYYY/MM/DD/slug` or `/<page-name` conventions. Otherwise, you will need to update the code to use the paths for your site.

Next, copy the HTML in `button.html` and add it to your web page. Copy the CSS in `button.css` and paste it into your site stylesheet. The button will only appear when the specified editing mode cookie is set.

You're now ready to use the project!

### How to Use

To enable editing mode, go to the `/mobile-edit` path (or whatever URL you have set). You should then see the edit mode button on all pages on your website.

## Acknowledgements

The edit icon used in this repository is from the amazing [Phosphor Icons](https://phosphoricons.com) project (MIT licensed).

## License

This project is licensed under an [MIT license](LICENSE).
