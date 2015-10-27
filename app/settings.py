# -*- coding: utf-8 -*-
import os

DEBUG = True
APP_DIR = os.path.dirname(os.path.abspath(__file__))


def parent_dir(path):
    return os.path.abspath(os.path.join(path, os.pardir))


PROJECT_ROOT = parent_dir(APP_DIR)
FREEZER_DESTINATION = PROJECT_ROOT
FREEZER_BASE_URL = "http://gjyaiya.github.io/"
# FREEZER_REMOVE_EXTRA_FILES = False
FREEZER_DESTINATION_IGNORE = ['.git*', '.idea/*', 'app/*', '*.py', 'READ*']

FLATPAGES_MARKDOWN_EXTENSIONS = ['codehilite']
FLATPAGES_ROOT = os.path.join(APP_DIR, 'pages')
FLATPAGES_EXTENSION = '.md'
