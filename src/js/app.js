// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */

flsFunctions.isWebp();

// Модуль для работы с меню (Бургер)
flsFunctions.menuInit();

// Модуль работы с табами
flsFunctions.tabs();
