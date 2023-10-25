let rankings = [];

exports.handler = async function(event, context) {
    const payload = JSON.parse(event.body);
    rankings.push({ name: payload.name, score: payload.score });
    rankings.sort((a, b) => b.score - a.score);

    return {
        statusCode: 200,
        body: JSON.stringify(rankings)
    };
};