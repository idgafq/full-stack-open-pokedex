--- Hypothetical Python project CI/CD pipeline ---

Linting: mypy with a shared configuration file ./mypy.ini
Testing: pytest
Building: Cpython first configure: ./configure --with-pydebug, build command is: make -s -j2

Besides Jenkins and Github Actions, other options are GitLab CI, Azure DevOps, CircleCI, Bitbucket Pipelines, and AWS CodePipeline. For a small project, either use the free pipeline from Azure DevOps that's cloud hosted, or free execution units from Github Actions, or setup Jenkins on a local/cloud server depending on the working enviorment.

Mock changes for branch.
Even more changes.
And more changes.