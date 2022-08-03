createdTimestamp = '01-Aug-2022 16:59:00'.toDateTime();
info createdTimestamp;

createdTimestampNew = createdTimestamp;
createdTimestampNew = createdTimestampNew.addBusinessHour(0.01);
info createdTimestampNew;
createdTimestampNew = createdTimestampNew.addBusinessHour(0.01);
info createdTimestampNew;

testTimeStamp = '02-Aug-2022 09:00:00'.toDateTime();
info testTimeStamp.addBusinessHour(1);
info testTimeStamp.addBusinessHour(0.1);
info testTimeStamp.addBusinessHour(0.01);
info testTimeStamp.addBusinessHour(0.3);
info testTimeStamp.addBusinessHour(0.7);
info testTimeStamp.addBusinessHour(1.7);