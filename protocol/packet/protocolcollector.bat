del ..\packets.mjs

for /r %%i in (*) do (
    if "%%~xi" == ".mjs" (
        echo export * from './packet/%%~nxi'; >> ..\packets.mjs
    )
)