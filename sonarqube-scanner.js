const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://108.137.69.66:9000',
    token : "sqp_b741f892e830c5bb1e05c100642a7c87de98ac6a",
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
