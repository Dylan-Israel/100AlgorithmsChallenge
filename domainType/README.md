### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/company-challenges/godaddy/RjJwsTCiF663krgSP)
---
GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature.
To begin with, you want to write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net or .info respectively.
For the given list of domains return the list of their labels.

**Example**

- For domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"], the output should be
domainType(domains) = ["organization", "commercial", "network", "information"].

**Hints**
-   split()
-   push()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**

- **[input] array.string domains**
    A list of domains, where each domain contains at least one dot. It is guaranteed that each top-level domain of these domains belongs to one of the types described above.

*Guaranteed constraints:*

4 ≤ domains.length ≤ 25,
5 ≤ domains[i].length ≤ 20.

- **[output] array.string**
    The list of labels for the given domains.