# Kwiz Computing Technologies Website

This is the source code for the Kwiz Computing Technologies website, built with [Quarto](https://quarto.org/).

## Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) (version 1.4 or higher)
- Python 3.11+ (for interactive visualizations)
- R 4.3+ (optional, for R-based content)

## Setup

### 1. Install Quarto

Download and install Quarto from [quarto.org](https://quarto.org/docs/get-started/)

### 2. Install Python Dependencies

The blog posts use Python for interactive visualizations (Plotly charts, pandas tables). Install the required packages:

```bash
pip install -r requirements.txt
```

Or using a virtual environment (recommended):

```bash
# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows

# Install dependencies
pip install -r requirements.txt
```

### 3. Install R Dependencies (Optional)

If working with R-based blog posts:

```r
install.packages(c("rmarkdown", "knitr", "ggplot2", "dplyr"))
```

## Building the Site

### Preview Locally

```bash
quarto preview
```

This will start a local server and open the site in your browser. Changes are automatically reloaded.

### Render the Site

```bash
quarto render
```

The rendered site will be in the `_site` directory.

## Project Structure

```
.
├── _quarto.yml           # Quarto configuration
├── index.qmd             # Home page
├── about.qmd             # About page
├── services.qmd          # Services page
├── contact.qmd           # Contact page
├── blog.qmd              # Blog listing page
├── blog/                 # Blog posts
│   ├── *.qmd             # Published blog posts
│   └── ...
├── blog_in_progress/     # Draft blog posts
├── images/               # Images and assets
├── styles/               # Custom CSS/SCSS
├── requirements.txt      # Python dependencies
└── _site/                # Rendered output (generated)
```

## Writing Blog Posts

Blog posts are located in the `blog/` directory. Each post is a `.qmd` (Quarto Markdown) file with YAML frontmatter:

```yaml
---
title: "Your Blog Post Title"
author: "Kwiz Computing Technologies"
date: "2025-11-09"
categories: [Category1, Category2]
description: "Brief description of the post"
image: "https://example.com/image.jpg"
---

Your content here...
```

### Using Interactive Visualizations

The blog supports interactive Python visualizations using Plotly:

````markdown
```{python}
#| echo: false
#| warning: false

import pandas as pd
import plotly.graph_objects as go

# Your visualization code
```
````

## Deployment

The site can be deployed to various platforms. See the [deployment guide blog post](blog/quarto-cloud-deployment-guide.qmd) for detailed instructions on deploying to:

- Google Cloud Platform (Firebase, Cloud Storage)
- Microsoft Azure (Static Web Apps, Blob Storage)
- Amazon AWS (Amplify, S3 + CloudFront)

## Contributing

When adding new blog posts:

1. Create a new `.qmd` file in `blog/` or `blog_in_progress/`
2. Add proper frontmatter (title, date, categories, description)
3. Test locally with `quarto preview`
4. Commit and push changes

## License

© 2025 Kwiz Computing Technologies. All rights reserved.

## Contact

For questions or support:
- Email: info@kwiztech.com
- Website: [kwizcomputing.com](https://kwizcomputing.com)
