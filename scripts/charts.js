// Kwiz Computing - Dynamic Charts Implementation
// Using Chart.js for data visualizations

// Brand colors
const brandColors = {
  primary: '#1a5e4a',
  primaryLight: 'rgba(26, 94, 74, 0.8)',
  primaryDark: '#145240',
  accent: '#2ecc71',
  gray: '#666',
  lightGray: '#f8f9fa',
  colors: [
    '#1a5e4a',
    '#2ecc71',
    '#3498db',
    '#e74c3c',
    '#f39c12',
    '#9b59b6',
    '#1abc9c',
    '#34495e'
  ]
};

// Utility: Wait for DOM to be ready
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// ============================================================================
// HOMEPAGE CHARTS
// ============================================================================

// Technology Stack Bar Chart
function createTechnologyChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['tidyverse', 'shiny', 'ggplot2', 'Quarto', 'tidymodels', 'plumber', 'testthat', 'rhino'],
      datasets: [{
        label: 'Proficiency Level',
        data: [95, 90, 95, 85, 80, 85, 90, 88],
        backgroundColor: brandColors.primary,
        borderColor: brandColors.primaryDark,
        borderWidth: 1,
        borderRadius: 5,
        hoverBackgroundColor: brandColors.accent
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Technology Stack Expertise',
          font: {
            size: 18,
            weight: 'bold'
          },
          color: brandColors.primary,
          padding: 20
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'Proficiency: ' + context.parsed.y + '%';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}

// Industry Distribution Pie Chart
function createIndustryChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Environmental & Sustainability',
        'Public Sector',
        'Research & Academia',
        'Business & Finance',
        'Healthcare'
      ],
      datasets: [{
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          brandColors.colors[0],
          brandColors.colors[1],
          brandColors.colors[2],
          brandColors.colors[3],
          brandColors.colors[4]
        ],
        borderWidth: 2,
        borderColor: '#fff',
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            padding: 15,
            font: {
              size: 12
            },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        title: {
          display: true,
          text: 'Industry Experience Distribution',
          font: {
            size: 18,
            weight: 'bold'
          },
          color: brandColors.primary,
          padding: 20
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              return label + ': ' + value + '%';
            }
          }
        }
      }
    }
  });
}

// Animated Statistics Counter
function animateCounter(elementId, target, duration = 2000, suffix = '') {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 16);
}

// ============================================================================
// ABOUT PAGE CHARTS
// ============================================================================

// Skills Radar Chart
function createSkillsRadarChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'R Programming',
        'Statistical Analysis',
        'Software Engineering',
        'Data Visualization',
        'Machine Learning',
        'Database Management',
        'Cloud Deployment',
        'Technical Writing'
      ],
      datasets: [{
        label: 'Expertise Level',
        data: [95, 90, 88, 95, 82, 85, 80, 88],
        backgroundColor: 'rgba(26, 94, 74, 0.2)',
        borderColor: brandColors.primary,
        borderWidth: 2,
        pointBackgroundColor: brandColors.primary,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: brandColors.primary,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Technical Expertise Profile',
          font: {
            size: 18,
            weight: 'bold'
          },
          color: brandColors.primary,
          padding: 20
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'Expertise: ' + context.parsed.r + '%';
            }
          }
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          pointLabels: {
            font: {
              size: 12,
              weight: '600'
            },
            color: brandColors.gray
          }
        }
      }
    }
  });
}

// Technology Ecosystem Bubble Chart
function createTechEcosystemChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Core Technologies',
          data: [
            { x: 90, y: 95, r: 25 },
            { x: 85, y: 90, r: 22 },
            { x: 95, y: 88, r: 20 }
          ],
          backgroundColor: 'rgba(26, 94, 74, 0.6)',
          borderColor: brandColors.primary
        },
        {
          label: 'Visualization Tools',
          data: [
            { x: 80, y: 75, r: 18 },
            { x: 75, y: 80, r: 16 }
          ],
          backgroundColor: 'rgba(46, 204, 113, 0.6)',
          borderColor: brandColors.accent
        },
        {
          label: 'Development Tools',
          data: [
            { x: 70, y: 85, r: 15 },
            { x: 65, y: 70, r: 14 }
          ],
          backgroundColor: 'rgba(52, 152, 219, 0.6)',
          borderColor: '#3498db'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Technology Ecosystem',
          font: {
            size: 18,
            weight: 'bold'
          },
          color: brandColors.primary,
          padding: 20
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Usage Frequency'
          },
          min: 50,
          max: 100
        },
        y: {
          title: {
            display: true,
            text: 'Proficiency'
          },
          min: 50,
          max: 100
        }
      }
    }
  });
}

// ============================================================================
// SERVICES PAGE CHARTS
// ============================================================================

// Engagement Types Donut Chart
function createEngagementChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Project-Based', 'Retainer Partnership', 'Training & Workshops'],
      datasets: [{
        data: [45, 35, 20],
        backgroundColor: [
          brandColors.colors[0],
          brandColors.colors[1],
          brandColors.colors[2]
        ],
        borderWidth: 3,
        borderColor: '#fff',
        hoverOffset: 15
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            font: {
              size: 14
            },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        title: {
          display: true,
          text: 'Service Engagement Distribution',
          font: {
            size: 18,
            weight: 'bold'
          },
          color: brandColors.primary,
          padding: 20
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              return label + ': ' + value + '%';
            }
          }
        }
      }
    }
  });
}

// Service Delivery Timeline Chart
function createServiceTimelineChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Discovery', 'Proposal', 'Agreement', 'Execution', 'Delivery', 'Support'],
      datasets: [{
        label: 'Project Progress',
        data: [0, 20, 30, 75, 95, 100],
        fill: true,
        backgroundColor: 'rgba(26, 94, 74, 0.1)',
        borderColor: brandColors.primary,
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: brandColors.primary,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: brandColors.accent,
        pointHoverBorderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Typical Project Timeline',
          font: {
            size: 18,
            weight: 'bold'
          },
          color: brandColors.primary,
          padding: 20
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'Completion: ' + context.parsed.y + '%';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          },
          title: {
            display: true,
            text: 'Project Completion'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Project Phase'
          }
        }
      }
    }
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Initialize all charts when DOM is ready
ready(function() {
  // Homepage charts
  createTechnologyChart('techChart');
  createIndustryChart('industryChart');

  // Animate homepage statistics
  animateCounter('projectsCount', 150, 2000, '+');
  animateCounter('clientsCount', 75, 2000, '+');
  animateCounter('yearsCount', 5, 1500, '');

  // About page charts
  createSkillsRadarChart('skillsRadarChart');
  createTechEcosystemChart('techEcosystemChart');

  // Services page charts
  createEngagementChart('engagementChart');
  createServiceTimelineChart('timelineChart');
});
