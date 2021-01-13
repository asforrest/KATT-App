import os
from flask import (
    Flask, flash, render_template, 
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_activities")
def get_activities():
    activities = mongo.db.activities.find()
    return render_template("activities.html", activities=activities)

# The code for user registration and sessions was adpated 
# from the User Authentication lessons @ Code Institute
# @app.route("/register", methods=["GET"], ["POST"])
# def register():
#     return render_template("register.html")

@app.route("/dashboard")
def dashboard():
    activities = mongo.db.activities.find()
    return render_template("dashboard.html", activities=activities)

@app.route("/register")
def register():
    users = mongo.db.users.find()
    return render_template("register.html", users=users)

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
