window.progress = new metal.ReadingProgress({
  items: ['#article1', '#article2', '#article3', '#article4'],
  trackerConfig: {
    activeClass: 'reading',
    completedClass: 'read',
  }
}, '#readingProgress');
