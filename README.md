Front End Coding Project
========================

- `./project`: Contains all of the files to be shared with a candidate
- `./testing`: Contains some rudimentary files for testing the project. To test, run `./testing/test.sh`.

Screenshots
===========
![Screen One](http://i.imgur.com/DmlCarz.png")

![Screen One](http://i.imgur.com/xXrgxac.png")

![Screen One](http://i.imgur.com/6XjXg1j.png)

Development Notes
=================
###### OVERALL
- Make app responsive and mobile friendly!
- All carousel-related components for the featured projects section can be found in the Carousel folder
- Express server set to Port 8081
- Webpack dev server set to Port 8080
  - npm run build
  - npm run launch

###### HEADER
- Adjust header image so more meaningful content is visible. Current css cuts off too much.
- Be more concise and properly import logo and header images and embed image urls. Had some issues properly accessing urls with Webpack.

###### CAROUSEL
- Like button issue. Thumbs up icon and text highlight at different times depending on mouse location and need to fix.
- Carousel currently stops at the last featured project. Need to loop featured projects to avoid dead space.

###### CATEGORIES
- Fix uneven spacing between “All” and “Furniture.” Designs reflect uneven spacing but should be adjusted.

###### SEARCH
- Build out search
- Continue styling search field

###### PROJECTS LISTS
- Like button issue. Thumbs up icon and text highlight at different times depending on mouse location and need to fix.
- Project images are slightly off. Need to adjust images to achieve proper zoom level.

###### GENERAL CSS NOTES
- CSS needs to be cleaned up!
- Needs to be minified and I’d like to add more thorough and consistent comments.
- Some of the grey color values were a little too light for the text so I used slightly darker hex colors.
