---
name: Code Error Checker
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers: []
---

# Code Error Checker Microagent

This microagent is designed to systematically check code in the GitHub repository for errors and fix them automatically.

## Purpose

The Code Error Checker microagent performs comprehensive code analysis and error resolution for the Live-chatroom repository. It identifies common programming errors, syntax issues, logical problems, and code quality issues, then provides automated fixes.

## Capabilities

### Error Detection
- **Syntax Errors**: Identifies and fixes syntax errors in various programming languages
- **Runtime Errors**: Detects potential runtime issues and null pointer exceptions
- **Logic Errors**: Finds logical inconsistencies and incorrect implementations
- **Code Quality Issues**: Identifies code smells, unused variables, and inefficient patterns
- **Security Vulnerabilities**: Scans for common security issues and vulnerabilities
- **Dependency Issues**: Checks for missing dependencies and version conflicts

### Supported Languages
- JavaScript/TypeScript
- Python
- HTML/CSS
- JSON configuration files
- Markdown documentation
- Shell scripts

### Error Fixing Process
1. **Comprehensive Scan**: Performs a thorough scan of all code files in the repository
2. **Error Classification**: Categorizes errors by severity (critical, high, medium, low)
3. **Automated Fixes**: Applies automated fixes for common, well-defined errors
4. **Manual Review Suggestions**: Provides detailed suggestions for complex issues requiring human review
5. **Testing Validation**: Runs available tests to ensure fixes don't break existing functionality
6. **Documentation Updates**: Updates relevant documentation when code changes affect API or functionality

### Error Categories Handled

#### Critical Errors
- Syntax errors preventing compilation/execution
- Missing required dependencies
- Security vulnerabilities
- Broken imports/exports

#### High Priority Errors
- Runtime exceptions
- Memory leaks
- Performance bottlenecks
- API breaking changes

#### Medium Priority Issues
- Code quality violations
- Unused variables/functions
- Inconsistent formatting
- Missing error handling

#### Low Priority Issues
- Code style inconsistencies
- Missing comments/documentation
- Minor optimization opportunities

## Implementation Strategy

### Phase 1: Discovery and Analysis
- Scan repository structure and identify all code files
- Analyze file types and determine appropriate linting/checking tools
- Create comprehensive error inventory with severity classification

### Phase 2: Automated Fixes
- Apply automated fixes for syntax errors and formatting issues
- Resolve import/export problems
- Fix common code quality violations
- Update deprecated API usage

### Phase 3: Manual Review Items
- Generate detailed reports for complex logical errors
- Provide refactoring suggestions for architectural improvements
- Highlight security concerns requiring human judgment
- Document breaking changes and migration paths

### Phase 4: Validation and Testing
- Run existing test suites to validate fixes
- Perform integration testing where applicable
- Generate before/after comparison reports
- Create rollback procedures for critical changes

## Tools and Technologies

### Static Analysis Tools
- ESLint for JavaScript/TypeScript
- Pylint/Flake8 for Python
- HTMLHint for HTML
- Stylelint for CSS
- JSONLint for JSON files

### Security Scanning
- npm audit for Node.js dependencies
- Bandit for Python security issues
- OWASP dependency check

### Code Quality Metrics
- Cyclomatic complexity analysis
- Code duplication detection
- Test coverage analysis
- Performance profiling

## Error Reporting

### Report Structure
```
Error Report for [Repository Name]
Generated: [Timestamp]

CRITICAL ERRORS (X found):
- [File:Line] [Error Type]: [Description]
- [Automated Fix Applied]: [Yes/No]

HIGH PRIORITY ERRORS (X found):
- [File:Line] [Error Type]: [Description]
- [Automated Fix Applied]: [Yes/No]

[Additional categories...]

SUMMARY:
- Total Errors Found: X
- Automatically Fixed: X
- Requiring Manual Review: X
- Files Modified: X
```

### Fix Documentation
For each automated fix, the microagent documents:
- Original error description
- Root cause analysis
- Applied solution
- Potential side effects
- Testing recommendations

## Best Practices

### Safety Measures
- Always create backup branches before applying fixes
- Test fixes in isolated environments first
- Maintain detailed change logs
- Provide rollback procedures for all modifications

### Quality Assurance
- Validate fixes don't introduce new errors
- Ensure code style consistency
- Maintain backward compatibility where possible
- Update relevant documentation and comments

### Continuous Improvement
- Learn from false positives and adjust detection rules
- Update error patterns based on new discoveries
- Incorporate feedback from manual reviews
- Maintain up-to-date tool configurations

## Usage Guidelines

### When to Use
- Before major releases or deployments
- After significant code changes or refactoring
- During code review processes
- As part of continuous integration pipelines
- When investigating reported bugs or issues

### Limitations
- Cannot fix complex architectural problems
- May not understand domain-specific business logic
- Requires human review for security-critical changes
- Cannot resolve conflicts requiring design decisions

### Integration Points
- Git hooks for pre-commit validation
- CI/CD pipeline integration
- IDE extensions for real-time feedback
- Automated pull request reviews

This microagent serves as a comprehensive code quality and error resolution system, helping maintain high code standards and reducing technical debt in the Live-chatroom repository.