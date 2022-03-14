Project created for queryung and showing tasks sorted by subject from Firestore database.

Built using react + bootstrap.

To test run: 
npm install (to install dependencies)
you need a database on firestore with the following collections:
- "math"

within each collection you have auto-generated documents with fields:
- qtext (string)
- qanswer (string)


Roadmap:
- Answer validation. Load next question.
- Add ability to store a count of solved tasks based off a unique username
- Populate site with questions within the different subjects
- 
- Top ten list of the users with the most solved tasks.