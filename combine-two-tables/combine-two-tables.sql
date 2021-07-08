SELECT Person.FirstName,person.LastName,Address.City,Address.State
FROM Person
LEFT OUTER JOIN Address ON Person.PersonId = Address.PersonId