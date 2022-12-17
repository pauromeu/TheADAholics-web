# What makes a movie successful?
## Table of contents
- [Abstract](#abstract)
- [Research Questions](#research-questions)
- [Proposed additional datasets and files](#proposed-additional-datasets-and-files)
- [Methods](#methods)
- [Proposed timeline](#proposed-timeline)
- [Organisation within the team](#organisation-within-the-team)
- [Questions for the TAs](#questions-for-the-tas)

## Abstract

What makes a movie successful? While this question may seem like a low-hanging fruit, it requires a very holistic approach. A good film should not only make use of the 7th Art but of all seven Arts. A movie implies many choices: what genres to focus on, which director and actors bring the most added value, what budget to spend? With such a big movie database, we can expect to find some patterns for which those choices lead to more successful movies. But then again, what makes a movie successful? From profitability to perenniality, we shall investigate different success indicators. Ideally, the goal for our data story would be to draw a generator for the next successful movie: a user would select for instance a genre of interest and we would suggest the ideal combo of actors, director, budget, diversity, etc.

## Research Questions

Using our current and future analysis, we aim to answer the following questions:

- What budget should be invested for a successful film? 
- Which actors and directors bring the most added value to a movie?
- Investigate the correlation between the choice of genres and movie profitability. What genres are the most profitable?
- What is the link between an actor's success and his/her physical features (gender, age, height, ethnicity)
- What release months are most profitable? 
- What countries release the most profitable winning movie? Is this evolving with time? 
- What types of roles will be suitable for which actors?
- What are the best plot lines? (NLP, if possible)

## Proposed additional datasets and files

- [IMDB top 1000 movies dataset](https://www.kaggle.com/datasets/omarhanyy/imdb-top-1000): The goal of this dataset is to obtain information on IMDB ratings of different movies, directors, and actors. 
- [IMDB budget](https://github.com/jeremy-lee93/dsc-mod-1-project-v2-1-onl01-dtsc-pt-052620/blob/master/IMDb_budgets.csv): The added value of this dataset is mainly the budget spent and other features which we already have to complete NaN.
- Wikipedia pageview statistics for movies: dataset crowed from Wikipedia pageview statistics public API. `utils/extract_wikipedia_pageview_statistics.py` is the script for obtaining this dataset. Its input is a dataframe with movie names and its output is a dataframe with pageview statistics.

## Methods

### Step 1: Data loading
* `movies`: dataframe including information from CMU movies
* `characters`: dataframe including information from CMU movie characters
* `imdb_top_1000`: dataframe including information from top 1000 movies from IMDB
* `imdb_budget`: dataframe including information from 3828 IMDB movies
* `wikipedia_pageviews`: dataframe including information on movies’ daily average pageviews

### Step 2: Cleaning & Pre-processing of data

For all datasets: Convert number to correct data types (int, float). Check outliers either by web proofing (ex: check on the internet what is the minimum length of ever-made movies) or by common sense (ex: actor height cannot be above 4m). The other outliers are filtered. Replace corrupted elements when finding data on the internet. Remove encoding if there are any in the datasets. 

#### Step 2.1: Movies

Creation of a weighted IMDB rating to account for rating and number of votes. We also account for inflation rates to modify all revenue, profit, and budget with the US inflation rate since 1913.  Proceed with outer merge based on datasets movies, imdb_top_1000, imdb_budget, wikipedia_pageviews. The goal of this outer merge is to combine common features while conserving the original dataset length to still be able to investigate the data fully. The redundant columns between datasets are used to fill in missing values to have a more complete dataset. 

#### Step 2.2: Characters
The character dataset preprocessing work was aimed at finding the ethnicities of the characters/authors. The original dataset only provided freebase ids which had to be translated into “readable” ethnicity. To solve this problem, a script has been created to obtain the identifier-label equivalences from Wikidata. In addition, manual work has also been done classifying the main races. Five main groups are extracted to ease comparison: Black, Asian, Indian, Latin, and White people. All the implementation information can be found in the main file.

### Step 3: Exploratory analysis

#### Step 3.1: Movies
A movie involves very diverse features. A correlation heat map is created to investigate links between features. The focus is put on distribution and link to profitability and success on the following features: release month, genres, profit VS budget for top movies, actors, and directors.

<p align="center">
  <img src="./figures/success_month.png" alt="success month" width="600"/>
</p>

#### Step 3.2: Characters
A movie is nothing without its actors. To analyze the success of a film, it is essential to look at its characters and by whom they are portrayed. The main objective of this point is to discover what are the characteristics that make an actor successful and, therefore, the film in which he participates. The character dataset allows us to study the main physical characteristics of the actors: gender, height, ethnicity, and age in which they participated in the movie. For instance, the following graph shows the distribution of ethnicities among actors and demonstrates the existence of a racial trend in the film industry

<p align="center">
 <img src="./figures/characters_ethnicities.png" alt="characters ethnicities" width="600"/>
</p>

#### Step 3.3: Cross movies and characters results
For the next milestone and to determine the overall success of the films, the analyses made for the films and the characters or actors that have been made independently for this installment will be cross-referenced.

#### Step 3.4: Clustering movies according to plot type
Using the processed summaries with NLP we would analyze movie plots and try to separate them into clusters (happy ending vs sad ending…) (inspiration: “The Seven Basic Plots: Why We Tell Stories” - Christopher Booker).


#### Step 3.5: Countries

To assert how representative our dataset is of movies made in different parts of the world, we decided to plot the distribution of movies by country. As expected, we note that almost half the dataset is made up of American movies.
We also want to know if this distribution has maybe changed over time, so we separate the dataset approximately in two: movies made before 1985 and movies made after 1985 and we run the previous analysis on the two subsets. We can see that the United States dominates movie production (or at least the dataset) but that Indian cinema has become more and more important. We will keep looking into these relations for the next milestone.

### Step 4: Try to advise choices of features for a successful movie

Cluster all the above investigations across genres to advise the creation of successful movies. 

## Proposed timeline
* 21.11.22 Pause project for Homework 2.
* 02.12.22 Homework 2 deadline
* 10.12.22 Rough draft of the datastory.
* 15.12.22 Complete all code implementations and visualizations relevant to the analysis.
* 20.12.22 Complete datastory.
* 23.12.22 Milestone 3 deadline

## Organisation within the team

| Teammate| Task |
| --- | --- |
| Pau | Clustering of actor physical features and success across genres. |
| Mehdi | Investigate best plot lines across genres and differences between countries |
| Nikolay| Clustering genres into finite categories |
| Olivia| Find optimal budget across genres |
| All| Creation of the git webpage and interactive plots to find “the next successful movie” |

# The Cayman theme

[![.github/workflows/ci.yaml](https://github.com/pages-themes/cayman/actions/workflows/ci.yaml/badge.svg)](https://github.com/pages-themes/cayman/actions/workflows/ci.yaml) [![Gem Version](https://badge.fury.io/rb/jekyll-theme-cayman.svg)](https://badge.fury.io/rb/jekyll-theme-cayman)

*Cayman is a Jekyll theme for GitHub Pages. You can [preview the theme to see what it looks like](http://pages-themes.github.io/cayman), or even [use it today](#usage).*

![Thumbnail of Cayman](thumbnail.png)

## Usage

To use the Cayman theme:

1. Add the following to your site's `_config.yml`:

    ```yml
    remote_theme: pages-themes/cayman@v0.2.0
    plugins:
    - jekyll-remote-theme # add this line to the plugins list if you already have one
    ```

2. Optionally, if you'd like to preview your site on your computer, add the following to your site's `Gemfile`:

    ```ruby
    gem "github-pages", group: :jekyll_plugins
    ```

## Customizing

### Configuration variables

Cayman will respect the following variables, if set in your site's `_config.yml`:

```yml
title: [The title of your site]
description: [A short description of your site's purpose]
```

Additionally, you may choose to set the following optional variables:

```yml
show_downloads: ["true" or "false" (unquoted) to indicate whether to provide a download URL]
google_analytics: [Your Google Analytics tracking ID]
```

### Stylesheet

If you'd like to add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site
2. Add the following content to the top of the file, exactly as shown:
    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```
3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line

*Note: If you'd like to change the theme's Sass variables, you must set new values before the `@import` line in your stylesheet.*

### Layouts

If you'd like to change the theme's HTML layout:

1. For some changes such as a custom `favicon`, you can add custom files in your local `_includes` folder. The files [provided with the theme](https://github.com/pages-themes/cayman/tree/master/_includes) provide a starting point and are included by the [original layout template](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html).
2. For more extensive changes, [copy the original template](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html) from the theme's repository<br />(*Pro-tip: click "raw" to make copying easier*)
3. Create a file called `/_layouts/default.html` in your site
4. Paste the default layout content copied in the first step
5. Customize the layout as you'd like

### Customizing Google Analytics code

Google has released several iterations to their Google Analytics code over the years since this theme was first created. If you would like to take advantage of the latest code, paste it into `_includes/head-custom-google-analytics.html` in your Jekyll site.

### Overriding GitHub-generated URLs

Templates often rely on URLs supplied by GitHub such as links to your repository or links to download your project. If you'd like to override one or more default URLs:

1. Look at [the template source](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html) to determine the name of the variable. It will be in the form of `{{ site.github.zip_url }}`.
2. Specify the URL that you'd like the template to use in your site's `_config.yml`. For example, if the variable was `site.github.url`, you'd add the following:
    ```yml
    github:
      zip_url: http://example.com/download.zip
      another_url: another value
    ```
3. When your site is built, Jekyll will use the URL you specified, rather than the default one provided by GitHub.

*Note: You must remove the `site.` prefix, and each variable name (after the `github.`) should be indent with two space below `github:`.*

For more information, see [the Jekyll variables documentation](https://jekyllrb.com/docs/variables/).

## Roadmap

See the [open issues](https://github.com/pages-themes/cayman/issues) for a list of proposed features (and known issues).

## Project philosophy

The Cayman theme is intended to make it quick and easy for GitHub Pages users to create their first (or 100th) website. The theme should meet the vast majority of users' needs out of the box, erring on the side of simplicity rather than flexibility, and provide users the opportunity to opt-in to additional complexity if they have specific needs or wish to further customize their experience (such as adding custom CSS or modifying the default layout). It should also look great, but that goes without saying.

## Contributing

Interested in contributing to Cayman? We'd love your help. Cayman is an open source project, built one contribution at a time by users like you. See [the CONTRIBUTING file](docs/CONTRIBUTING.md) for instructions on how to contribute.

### Previewing the theme locally

If you'd like to preview the theme locally (for example, in the process of proposing a change):

1. Clone down the theme's repository (`git clone https://github.com/pages-themes/cayman`)
2. `cd` into the theme's directory
3. Run `script/bootstrap` to install the necessary dependencies
4. Run `bundle exec jekyll serve` to start the preview server
5. Visit [`localhost:4000`](http://localhost:4000) in your browser to preview the theme

### Running tests

The theme contains a minimal test suite, to ensure a site with the theme would build successfully. To run the tests, simply run `script/cibuild`. You'll need to run `script/bootstrap` once before the test script will work.
