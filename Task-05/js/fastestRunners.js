function parsePace(paceStr) {
    const [m, s] = paceStr.split(':').map(Number);
    return (m * 60) + s;
}

function formatPace(totalSeconds) {
    const rounded = Math.round(totalSeconds);
    const m = Math.floor(rounded / 60);
    const s = rounded % 60;
    return m + ':' + s.toString().padStart(2, '0');
}

function getFastestRunners(runners) {
    const processed = runners.map(runner => {
        const pacesSec = runner.paces.map(parsePace);
        const totalTime = pacesSec.reduce((sum, val) => sum + val, 0);
        const avgPaceSec = totalTime / pacesSec.length;
        const fastestPaceSec = Math.min(...pacesSec);
        
        return {
            name: runner.name,
            totalTime,
            averagePace: formatPace(avgPaceSec),
            fastestPace: formatPace(fastestPaceSec)
        };
    });

    const overallAvgTime = processed.reduce((sum, r) => sum + r.totalTime, 0) / processed.length;
    
    return processed
        .filter(r => r.totalTime < overallAvgTime)
        .sort((a, b) => a.totalTime - b.totalTime)
        .map(r => ({
            name: r.name,
            averagePace: r.averagePace,
            fastestPace: r.fastestPace
        }));
}
module.exports = getFastestRunners;
