import React, { useState } from "react";

const documents = [
  {
    id: "carpenter",
    text: "Experienced carpenter specializing in custom woodworking projects. Skilled in crafting and installing furniture, cabinets, and trim work. Passionate about creating beautiful and functional spaces with attention to detail and precision.",
  },
  {
    id: "plumber",
    text: "Licensed plumber with expertise in residential and commercial plumbing systems. Proficient in installing and repairing pipes, fixtures, and water heaters. Committed to providing efficient and reliable plumbing services to ensure optimal functionality and customer satisfaction.",
  },
  {
    id: "construction-worker",
    text: "Dedicated construction worker experienced in various aspects of building construction. Proficient in performing tasks such as site preparation, framing, concrete work, and finishing. Strong work ethic, safety-oriented, and able to collaborate effectively with diverse teams.",
  },
  {
    id: "electrician",
    text: "Skilled electrician specializing in residential and commercial electrical installations and repairs. Experienced in handling electrical systems, wiring, lighting, and troubleshooting electrical issues. Committed to delivering quality workmanship and ensuring electrical safety.",
  },
  {
    id: "landscaper",
    text: "Professional landscaper passionate about transforming outdoor spaces into beautiful and inviting environments. Proficient in designing, installing, and maintaining gardens, lawns, and irrigation systems. Knowledgeable in plant selection, hardscaping, and landscape maintenance techniques.",
  },
];

// Calculate cosine similarity between two vectors

const cosineSimilarity = (vectorA, vectorB) => {
  const dotProduct = vectorA.reduce((acc, val, i) => acc + val * vectorB[i], 0);
  const magnitudeA = Math.sqrt(
    vectorA.reduce((acc, val) => acc + val * val, 0)
  );
  const magnitudeB = Math.sqrt(
    vectorB.reduce((acc, val) => acc + val * val, 0)
  );
  return dotProduct / (magnitudeA * magnitudeB);
};

const calculateTFIDF = (term, document, documents) => {
  let termFrequency = document.text
    .toLowerCase()
    .split(" ")
    .reduce((count, word) => {
      if (word === term.toLowerCase()) {
        return count + 1;
      }
      return count;
    }, 0);

  let inverseDocumentFrequency = documents.filter((doc) =>
    doc.text.toLowerCase().split(" ").includes(term)
  ).length;

  // Add a check for zero division
  if (inverseDocumentFrequency === 0) {
    return 0; // Or set a default value as per your requirements
  }

  inverseDocumentFrequency = Math.log(
    documents.length / inverseDocumentFrequency
  );

  return termFrequency * inverseDocumentFrequency;
};

const generateStem = (word) => {
  // Define the stem rules
  const rules = [
    { suffix: "ing", stem: "", conditions: ["e", "ee", "i"] },
    { suffix: "ing", stem: "e", conditions: ["[^aeiou]"] },
    { suffix: "s", stem: "", conditions: ["s", "ss", "x", "z"] },
    { suffix: "ed", stem: "", conditions: ["e", "ee", "i"] },
    { suffix: "ed", stem: "e", conditions: ["[^aeiou]"] },
    { suffix: "er", stem: "", conditions: ["e", "ee", "i"] },
    { suffix: "er", stem: "e", conditions: ["[^aeiou]"] },
    { suffix: "est", stem: "", conditions: ["e", "ee", "i"] },
    { suffix: "est", stem: "e", conditions: ["[^aeiou]"] },
    { suffix: "ly", stem: "" },
  ];

  // Apply the stem rules
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (word.endsWith(rule.suffix)) {
      if (rule.conditions) {
        const lastChars = word.slice(
          -rule.suffix.length - 1,
          -rule.suffix.length
        );
        if (rule.conditions.some((condition) => lastChars.match(condition))) {
          const stem = word.slice(0, -rule.suffix.length) + rule.stem;
          console.log("stem", stem);
          return stem;
        }
      } else {
        const stem = word.slice(0, -rule.suffix.length) + rule.stem;
        console.log("stem", stem);
        return stem;
      }
    }
  }

  // Return the original word if no stem rule is applicable
  return word;
};

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchDocuments = () => {
    // const preprocessedQuery = query.toLowerCase().split(" ");
    const preprocessedQuery = query
      .toLowerCase()
      .split(" ")
      .map((word) => generateStem(word)); // Stem each word

    const results = documents.map((document) => {
      //   const preprocessedData = document.text.toLowerCase().split(" ");
      const preprocessedData = document.text
        .toLowerCase()
        .split(" ")
        .map((word) => generateStem(word)); // Stem each word

      const intersection = preprocessedData.filter((term) =>
        preprocessedQuery.includes(term)
      );

      const queryVector = preprocessedQuery.map((term) =>
        intersection.includes(term) ? 1 : 0
      );
      const documentVector = preprocessedData.map((term) =>
        intersection.includes(term) ? 1 : 0
      );

      const similarity = cosineSimilarity(queryVector, documentVector);
      const tfidfScores = preprocessedQuery.map((term) =>
        calculateTFIDF(term, document, documents)
      );
      const tfidfSimilarity = tfidfScores.reduce(
        (acc, score) => acc + score,
        0
      );

      return {
        id: document.id,
        cosineSimilarity: similarity,
        tfidfSimilarity: tfidfSimilarity,
      };
    });

    results.sort((a, b) => b.cosineSimilarity - a.cosineSimilarity);

    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={searchDocuments}>Search</button>
      {searchResults.map((result) => (
        <div key={result.id}>
          <p>Document ID: {result.id}</p>
          <p>Cosine Similarity Score: {result.cosineSimilarity}</p>
          <p>TF-IDF Similarity Score: {result.tfidfSimilarity}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
