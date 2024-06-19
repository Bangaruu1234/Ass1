const calculateVotes = (candidateName, votes, region) => {
    return `${candidateName} received ${votes} votes in ${region}.`;
};

// Example usage:
console.log(calculateVotes("alia", 8000, "chittoor"));
