# -*- coding: utf-8 -*-
from flask import Flask, render_template
from flask.ext.frozen import Freezer
from flask_flatpages import FlatPages

app = Flask(__name__)
app.config.from_pyfile('settings.py')
pages = FlatPages(app)
freezer = Freezer(app)


@app.route('/')
@app.route('/page/<int:page>/')
def index(page=0):
    articles = [item for item in pages]
    return render_template('index.html', articles=articles)


@app.route('/category/<category>/')
def category_list(category):
    articles = [item for item in pages if category == item['category']]
    return render_template('index.html', articles=articles)


@app.route('/tag/<tag>/')
def tag_list(tag):
    articles = [item for item in pages if tag in item['tags']]
    return render_template('index.html', articles=articles)


@app.route('/article/<article>/')
def show_article(article):
    article = pages.get(article)
    article.html = article.html.replace('<pre>', "<pre class='prettyprint linenums no-phone'>")
    return render_template('article.html', article=article)


@app.route('/c')
def christmas():
    return render_template('christmas.html')