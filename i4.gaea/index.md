# i4.genetic algorithm and evolutionary algorithm


**Q. What are genetic algorithm and evolutionary algorithm?**

Genetic algorithm (GA) is a sub-class of evolutionary algorithm (EA). 

There are 3 implementation of EAs: GA, evolution strategies (ES), and evolutionary programming (EP). Among these, GAs have proved to be the most popular of the 3 EAs. These algorithms are similar in general, yet there are big differences among them:

**GA**: They were developed by Holland and thoroughly reviewed by Goldberg;

**ES**: They were developed by Rechenberg and Schwefe; and

**EP**: It was developed by L.J. Fogel and D.B. Fogel.

**Similarity and Differences:**

All 3 operate on fixed length strings, which contain real values in ESs and EP and binary numbers in the canonical GA.

All 3 incorporate a mutation operator: for ESs and EP mutation is the driving force. GAs and ESs also use a recombination operator, which is the primary operator for the GA.

All 3 use a selection operator which applies evolutionary pressure, either instinctive (in ESs and EP, the operator determines which individuals will be excluded from the new population) or preservative (in the GA the operator selects individuals for breeding)..

In GAs and EP selection is probabilistic, while ESs use a deterministic selection. ESs and meta-EP allow self-adaptation, where parameters controlling mutation are allowed to evolve along with object variables. Finally, it is worth noting that the implementer is free to modify these algorithms. For example, the GA can be run using an integer alphabet.

From: https://www.researchgate.net/post/Are_Genetic_Algorithms_GA_and_Evolutionary_Algorithms_EA_the_same_or_different

