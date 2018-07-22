# The Future of Music

### Inspiration
The overall idea behind my project is pretty simple: Can we predict the trajectory of a musical artist, given their current body of work? Can we also gain insight into popular artists in that predicted space, and use that information to recommend small adjustments to an artist’s sound?

### Data Selection
To answer these questions, I utilized Spotify’s developer API to gain insights at a track level, gathering features like acousticness, energy, and song length. The track-level data was passed into a linear regression model, which allowed me to predict future values for each feature. Sending the predicted feature values back into the Spotify API provided me with insight into songs that were close matches, which became my song recommendations!

### Feature Engineering
I wanted to provide a visual representation of Spotify’s API features, but I had to remove a fair amount of noise - or data that was returned, but didn’t really add value to my analysis - by sending my features through a form of feature selection (Linear Discriminant Analysis, or LDA). This allowed me to focus on the song features that really helped distinguish one song from another, but still didn’t allow me to visualize my results.

### Visualization
Radar graphs allowed me to visualize the features of each album and recommended track by allowing me to show the value for each feature returned by the LDA model. Visualizing the relationship between songs was more difficult with multiple features, so I selected an option (t-SNE) that would allow me to keep the important features while still being easy to read.

### Storytelling
Storytelling is really important to me, and the music data that I worked with wasn’t well suited for a dashboard or individual graphs. I wanted to create multiple websites to showcase the story of my selected artists, and was able to use a combination of JavaScript, HTML and CSS (via Bootstrap) to bring the story to life in a vibrant and interactive way.

## Packages Used

* **Spotipy** for interacting with the Spotify API.
* **Pandas** for general data handling.
* **Scikit-learn** for LDA and t-SNE.
* **Bokeh** for creating interactive t-SNE graphs via JavaScript.
* **Matplotlib** for creating radar graphs.
* **Bootstrap** templates for my web design.

[Spotify API data descriptions can be found here:](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/)

## Project Workflow
The diagram below helps to explain the workflow for my project, along with highlighting how those elements were incorporated into my final product. The Spotify API provided all of the data for my project, so I invested a lot of time and effort into creating a repeatable workflow for pulling, cleaning, and transforming the data.

![Alt text](The-future-of-music/Readme Img//Workflow.png?raw=true "Project Workflow")

## Project Screenshots

## Album Features: Flipcard Example (A Fine Frenzy Webpage)
![Alt text](The-future-of-music/Readme Img/Flipcards.png?raw=true "Flipcard")

## Album Features: t-SNE (AM Webpage)
![Alt text](The-future-of-music/Readme Img/t-SNE.png?raw=true "t-SNE")

## Recommended Track Features: Modal Example (Beatles Webpage)
![Alt text](The-future-of-music/Readme Img/Rec_Modal.png?raw=true "Modal")

## Future Goals

### Topic Modeling
During my initial data exploration, I had incorporated lyric analysis and topic modeling, which I believe is equally as important to the popularity of a song. I wasn't able to refine my parameters to create a presentable and accurate representation, so I had to cut lyric analysis from the first phase of my project.

### Spotify Token Auto-refreshing
The Spotify API token needs to be refreshed every 30 minutes, which can be annoying when your token expires in the middle of your code. I have found a few articles for automatically refreshing an API token that I'd love to incorporate into my workflow.
