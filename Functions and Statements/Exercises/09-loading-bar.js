function solve(progress){
    const renderProgresBar = (progress) => `[${'%'.repeat(progress/10)}${'.'.repeat(10-progress/10)}]`;
    const renderProgress = (progress) => `${progress}% ${renderProgresBar(progress)}`;
    const isCompleted = progress === 100;

    console.log(renderProgress(progress));
    console.log(isCompleted ? 'Complete!' : 'Still loading...');
}

solve(100);