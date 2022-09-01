# Boundless Frontend Interview

## Getting started

1. Install packages
   `npm install`

2. Run in your local development
   `npm run start`


## Challenges
Note: these challenges don't have designs, so you'll have to use your best judgement on how to style them. Feel free to 
style them however you're comfortable with. No need to make everything look perfect. Focus on the functionality.

### Level 1
Create a layout for "Polls" and "Forums" that has an empty sidebar component. "Dashboard" should not have 
the sidebar.


### Level 2
1. Implement a stateful counter in the sidebar you created in level 1. It should display the current count and have buttons to increase and decrease the count. 
2. On refresh, the stateful counter should persist the value it had previously.


### Level 3
When changing between "Polls" and "Forums", the counter value should remain the same.


### Level 4
Rather than having just one counter, we want to have a list of counters. The features required are as follows:
1. Adding a new counter
2. Removing a counter
3. Changing a counter's name

The design for this is up to you. Again, no need to make it look pretty, just make it clear what the user can do.


### Level 5
You'll find a list of employees in `src/mockEmployees.js`. You'll be using that data for this challenge.

In the "Dashboard" page, create a layout that has 3 tabs.
* Rehire Eligible (`require_eligible = true`)
* Rehire Ineligible (`require_eligible = false`)
* Rehire Unknown (`require_eligible = null`)

Each tab should follow these criteria:
* Show the list of the employees that correspond with their `rehire_eligible` value.
* Group employees by their termination date and show the date above them. For example, if there are 3 employees that were
terminated on March 15, 2021, display "March 15, 2021" and then list the 3 employees below it.
* For each employee, display their name, position, and whether they left voluntarily or not (`voluntary` value).

