# -*- coding: utf-8 -*-
from flask import Flask, render_template
from flask.ext.frozen import Freezer
from flask_flatpages import FlatPages

app = Flask(__name__)
app.config.from_pyfile('settings.py')
pages = FlatPages(app)
freezer = Freezer(app)


@app.route('/')
@app.route('/page/<int:page>')
def index(page=0):
    articles = [item for item in pages]
    print(articles)
    return render_template('index.html', articles=articles)


@app.route('/category/<category>')
def category(category):
    return render_template('index.html')


@app.route('/tag/<tag>')
def tag(tag):
    return render_template('index.html')


@app.route('/article/<article>')
def show_article(article):
    article = pages.get(article)
    return render_template('article.html', article=article)
