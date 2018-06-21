function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const fileIds: number[] = [];

    for(let change of changes) {
        const fileBackuptime = change[0];
        const filedId = change[1];

        if (fileBackuptime > lastBackupTime) {
            if (!fileIds.includes(filedId)) {
                fileIds.push(filedId);
            }
        }
    }

    return fileIds.sort((fileId1, fileId2) => fileId1 - fileId2);
}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
