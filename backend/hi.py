import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Execute a SELECT query to retrieve the first element
cursor.execute("SELECT * FROM Person LIMIT 1")
data = cursor.fetchone()

# Close the connection
conn.close()

# Print the retrieved data
print(data)
