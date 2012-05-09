@echo off
set CURR_DIR=%~dp0
set CLASS_PATH=%CURR_DIR%\lib\ant.jar;%CURR_DIR%\lib\ant-nodeps.jar;%CURR_DIR%\lib\ant-launcher.jar;%CURR_DIR%\lib\tools.jar
set MAIN_CLASS=org.apache.tools.ant.Main
set TARGET=all
rem set JAVA_HOME=D:\program\jdk\jdk1.6.0_21
pushd %CURR_DIR%\..\..
%JAVA_HOME%\bin\java -Xmx512m -cp %CLASS_PATH% %MAIN_CLASS% %TARGET%
popd
