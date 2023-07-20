const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://13.229.155.47:9000',
    token : "sqp_0234f84e0b47ef1925b25b0aad9a86604a9e95f3",
    options: {
      'sonar.projectKey': 'My-Portofolio',
      'sonar.projectName': 'My Portofolio',
      'sonar.projectDescription': 'My Website Portofolio',
      "sonar.sourceEncoding":'UTF-8',
      'sonar.sources': './src',
      // "sonar.test.inclusions": "**/*.test.js,**/*.test.js",
      // "sonar.exclusions": "**/*.test.js",
      // 'sonar.tests': './src',
      // 'sonar.testExecutionReportPaths': 'test-report.xml',
      // 'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    }
  },
  () => process.exit()
)
