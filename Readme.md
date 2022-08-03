# **[Adding-Business-Minutes-to-Timestamp](https://github.com/TheWorkflowAcademy/Adding-Business-Minutes-to-Timestamp)**

## Problem Statement

In Deluge, we have functions to add/subtract business timings on a day, and hour level. But if we dealt with a situation where a data point was created on Friday 4:59PM, and we need to push this to the following business day starting at Monday 9AM, all we need is just 2 minutes to push it to the Monday 9AM mark.

If we used `addBusinessDay()`, then this will push the original timestamp of Friday 4:59PM to Monday 4:59PM.

ℹ️ This article bypasses the following functions that deals with business days, which might be useful for strict timestamp manipulations related to selected business days.

There are the following functions that could help achieve timestamp manipulations for business/working days:

- addBusinessDay()
- subBusinessDay()
- addBusinessHour()
- workday()
- workDaysBetween()
- workDaysList()

The functions above can be found in the [Date-time functions](https://www.zoho.com/deluge/help/functions/date-time.html) of the Zoho help article.

---

## Business Use Case

Let’s use an example of Monday 1st August 2022 4:59PM.

```jsx
createdTimestamp = '01-Aug-2022 16:59:00'.toDateTime();
info createdTimestamp; //Returns 01-Aug-2022 16:59:00
```

What we want to do is to add 2 minutes to this timestamp, so the timestamp will show up as Tuesday 2nd August 2022 9AM instead of Monday 1st August 2022 5:01PM by using `addBusinessHour()`.

```jsx
createdTimestampNew = createdTimestamp;
createdTimestampNew = createdTimestampNew.addBusinessHour(0.01);
info createdTimestampNew; //Returns 01-Aug-2022 17:00:00
createdTimestampNew = createdTimestampNew.addBusinessHour(0.01);
info createdTimestampNew; //Returns 02-Aug-2022 09:00:00
```

What happened in the above is that with `addBusinessHour()` , it accepts decimal places as well as whole numbers.

If whole numbers is parsed into the function, then this will add one business hour to the timestamp. For this case, it could have returned Tuesday 2nd August 2022 9:59AM instead of 9AM.

By submitting decimal places, this is a combination of a fraction of how we read this in minutes, and anything above 60 minutes, will be treated as `60 + n` minutes.

Some examples:

- `addBusinessHour(0.1)` means we are adding 10 minutes.
- `addBusinessHour(0.01)` means we are adding 1 minute.
- `addBusinessHour(0.3)` means we are adding 30 minutes.

These are pretty straightforward until anything exceeds 60 minutes (0.6):

- `addBusinessHour(0.7)` means we are adding 70 minutes.
- `addBusinessHour(0.8)` means we are adding 80 minutes.
- *and the list goes on..*

Just remember the decimal places represent the number of minutes and does not cap at 60 minutes (which is an hour).

If you’d like to use a whole number with decimal places, this will add the business hour, followed by how many minutes is present through the decimal places.

- `addBusinessHour(1.1)` means we are adding 1 hour and 10 minutes. Which is also 70 minutes.
- `addBusinessHour(1.7)` means we are adding 2 hours and 10 minutes. Which is also 110 minutes.
    - As 0.7 is 70 minutes, so we have to take the remainder of 70 minutes after dividing it by 60, to get 10 minutes as a remainder.

Here are some examples to demonstrate the usage of whole numbers, and numbers with decimal places to add to business times.

```jsx
testTimeStamp = '02-Aug-2022 09:00:00'.toDateTime();
info testTimeStamp.addBusinessHour(1); //Returns 02-Aug-2022 10:00:00
info testTimeStamp.addBusinessHour(0.1); //Returns 02-Aug-2022 09:10:00
info testTimeStamp.addBusinessHour(0.01); //Returns 02-Aug-2022 09:01:00
info testTimeStamp.addBusinessHour(0.3); //Returns 02-Aug-2022 09:30:00
info testTimeStamp.addBusinessHour(0.7); //Returns 02-Aug-2022 10:10:00
info testTimeStamp.addBusinessHour(1.7); //Returns 02-Aug-2022 11:10:00
```

ℹ️ Note: You can also subtract business hours as well as to add business hours!