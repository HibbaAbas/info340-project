import React, { useState, useEffect } from 'react';

const LogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState({ severity: '', keyword: '', dateRange: [null, null] });
  const [sort, setSort] = useState({ key: 'timestamp', order: 'asc' });

  useEffect(() => {
    fetch('/api/logs')
      .then(response => response.json())
      .then(data => setLogs(data));
  }, []);

  const filteredLogs = logs.filter(log => {
    const matchesSeverity = filter.severity ? log.level === filter.severity : true;
    const matchesKeyword = filter.keyword ? log.message.includes(filter.keyword) : true;
    const matchesDateRange = filter.dateRange[0] && filter.dateRange[1] ?
      new Date(log.timestamp) >= filter.dateRange[0] && new Date(log.timestamp) <= filter.dateRange[1] : true;
    return matchesSeverity && matchesKeyword && matchesDateRange;
  });

  const sortedLogs = filteredLogs.sort((a, b) => {
    if (sort.key === 'timestamp') {
      return sort.order === 'asc' ? new Date(a.timestamp) - new Date(b.timestamp) : new Date(b.timestamp) - new Date(a.timestamp);
    }
    if (sort.key === 'level') {
      return sort.order === 'asc' ? a.level.localeCompare(b.level) : b.level.localeCompare(a.level);
    }
    return 0;
  });

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSortChange = (key) => {
    setSort({ key, order: sort.order === 'asc' ? 'desc' : 'asc' });
  };

  return (
    <div>
      <div>
        <label>
          Severity:
          <select name="severity" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </label>
        <label>
          Keyword:
          <input name="keyword" type="text" onChange={handleFilterChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" onChange={(e) => setFilter({ ...filter, dateRange: [new Date(e.target.value), filter.dateRange[1]] })} />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" onChange={(e) => setFilter({ ...filter, dateRange: [filter.dateRange[0], new Date(e.target.value)] })} />
        </label>
      </div>
      <div>
        <button onClick={() => handleSortChange('timestamp')}>Sort by Timestamp</button>
        <button onClick={() => handleSortChange('level')}>Sort by Level</button>
      </div>
      <ul>
        {sortedLogs.map(log => (
          <li key={log.timestamp}>{log.timestamp} - {log.level} - {log.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogViewer;
