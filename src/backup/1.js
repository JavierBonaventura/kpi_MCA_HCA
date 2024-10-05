self.onInit = function () {
  console.log("todo el contexto", self.ctx.data);

  // generacion de la sidebar
  // función para traer de la API los elementos de configuración
  function getEntityConfiguration(ctx) {
    var params = {
      entityId: {
        id: "e7fc1170-5b03-11ee-82fe-034bf80f0465",
        entityType: "ASSET",
      },
      entityName: "CENAGAS-FULL",
    };

    let $injector = ctx.$scope.$injector;
    let attributeService = $injector.get(
      self.ctx.servicesMap.get("attributeService")
    );

    attributeService
      .getEntityAttributes(params.entityId, "SERVER_SCOPE", ["Configuracion"])
      .subscribe((attribute) => {
        console.log("Configuracion", attribute);
        const modules = attribute[0].value;

        // Ordenar los módulos por su índice
        modules.sort((a, b) => a.Indice - b.Indice);

        // Obtener los íconos y URLs desde la configuración
        const moduleIcons = {};
        const moduleUrls = {};

        modules.forEach((moduleConfig) => {
          const moduleName = moduleConfig.Nombre;
          const icon =
            moduleConfig.Icono || "fas fa-question card-icon-sidebar"; // Icono por defecto
          const url = moduleConfig.URL || "#"; // URL por defecto
          moduleIcons[moduleName] = icon;
          moduleUrls[moduleName] = url;
        });

        // Obtener permisos del usuario y filtrar los módulos disponibles
        obtenerPermisosUsuario(modules, moduleIcons, moduleUrls);
      });
  }

  // función para ver qué permisos tiene el usuario
  function obtenerPermisosUsuario(modules, moduleIcons, moduleUrls) {
    const $injector = self.ctx.$scope.$injector;
    const attributeService = $injector.get(
      self.ctx.servicesMap.get("attributeService")
    );

    var params = {
      entityId: {
        id: self.ctx.currentUser.userId,
        entityType: "USER",
      },
      entityName: self.ctx.currentUser.sub,
    };

    const attributeScope = "SERVER_SCOPE";
    const keys = ["Permisos"];

    attributeService
      .getEntityAttributes(params.entityId, attributeScope, keys)
      .subscribe((data) => {
        console.log("Entity Attributes:", data[0].value);
        const userModules = data[0].value.modules;

        // Filtrar los módulos que están en la configuración y en los permisos del usuario
        const filteredModules = modules.filter((module) =>
          userModules.includes(module.Nombre)
        );

        // Generar la interfaz solo con los módulos filtrados
        generarInterfaz(filteredModules, moduleIcons, moduleUrls);
      });
  }

  getEntityConfiguration(ctx);

  function navigateToDashboard(target, isState) {
    console.log(`Ir a ${isState ? "estado" : "dashboard"}: ${target}`);
    const widgetContext = self.ctx;
    const params = widgetContext.stateController.getStateParams();

    // Función para eliminar los estados anteriores
    function clearPreviousStates() {
      let stateIndex = widgetContext.stateController.getStateIndex();
      while (stateIndex > 0) {
        stateIndex -= 1;
        backToPrevState(stateIndex);
      }
    }

    // Función para retroceder a un estado anterior
    function backToPrevState(stateIndex) {
      widgetContext.stateController.navigatePrevState(stateIndex);
    }

    if (isState) {
      // Eliminar los estados anteriores antes de navegar
      clearPreviousStates();
      // Navegación a un estado dentro del mismo dashboard
      widgetContext.stateController.openState(target, params, false);
    } else {
      // Eliminar los estados anteriores antes de navegar a un dashboard distinto
      clearPreviousStates();
      var stateObject = {
        id: "state1",
        params: {
          entityId: null,
          entityName: null,
        },
      };
      var state = objToBase64URI([stateObject]);
      var url = `/dashboards/${target}?state=${state}`;
      window.location.href = url;
    }
  }

  // Función auxiliar para convertir objetos a Base64 URI
  function objToBase64URI(obj) {
    return encodeURIComponent(objToBase64(obj));
  }

  function objToBase64(obj) {
    const json = JSON.stringify(obj);
    return btoa(
      encodeURIComponent(json).replace(
        /%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
          return String.fromCharCode(Number("0x" + p1));
        }
      )
    );
  }

  // Función para generar dinámicamente solo las opciones de la sidebar
  function generarInterfaz(modules, moduleIcons, moduleUrls) {
    const sidebarContainer = document.getElementById("sidebar");

    modules.forEach((module) => {
      const moduleName = module.Nombre;
      const iconClass =
        moduleIcons[moduleName] || "fas fa-question card-icon-sidebar"; // Icono por defecto
      const moduleUrl = moduleUrls[moduleName] || "#"; // URL por defecto

      // Generar opción de la sidebar
      const sidebarItem = document.createElement("a");
      sidebarItem.className = "sidebar-item";
      sidebarItem.id = `boton_${moduleName.replace(/\s+/g, "_").toLowerCase()}`;
      sidebarItem.innerHTML = `<i class="${iconClass}"></i> <span class="link-text">${moduleName}</span>`;
      sidebarContainer.appendChild(sidebarItem);

      // Lógica de navegación según el tipo de URL
      if (moduleUrl.startsWith("http")) {
        // Caso 1: Navegación a una URL externa -> si empieza con http
        sidebarItem.href = moduleUrl;
        sidebarItem.target = "_blank"; // Abrir en una nueva pestaña
      } else if (moduleUrl.startsWith("#")) {
        // Caso 2: Navegación a un estado del dashboard -> si empieza con #
        const stateName = moduleUrl.substring(1); // Remover el "#" del inicio
        sidebarItem.href = "#";
        sidebarItem.addEventListener("click", function (event) {
          event.preventDefault();
          navigateToDashboard(stateName, true);
        });
      } else if (moduleUrl.startsWith("/")) {
        // Caso 3: Navegación a un dashboard distinto -> si empieza con /
        const dashboardName = moduleUrl.substring(1); // Remover el "/" del inicio
        sidebarItem.href = "#";
        sidebarItem.addEventListener("click", function (event) {
          event.preventDefault();
          navigateToDashboard(dashboardName, false);
        });
      }
    });
  }

  document.getElementById("myButton").addEventListener("click", function () {
    toggleSidebar();
  });

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
  }

  // fin sidebar

  //incio codigo para svg

  //codigo por api

  var params = {
    entityId: {
      id: "9c939380-6c77-11ef-bf7d-95c929e59f7c",
      entityType: "DEVICE",
    },
    entityName: "Modelo1TrainerL",
  };

  let $injector = ctx.$scope.$injector;
  let attributeService = $injector.get(
    self.ctx.servicesMap.get("attributeService")
  );

  // Atributos a leer
  // Atributos a leer
  const attributesToRead = [
    "FYEH_FQYE01",
    "HER_FQY_015",
    "IMP_NACO_PC",
    "NAC_PT_903",
    "VS_ZARAGOZA_MLV-037",
    "VS_CANANEA_MLV-057",
    "CUI_MLV-078",
    "VS_JACALITOS_MLV-101",
    "VS_IMURIS_MVL-125",
    "VS_MAGDALENA_MLV",
    "ANA_MLV-168",
    "VS_LLANO_MLV-186",
    "VS_BENAJMIN_MLV-206",
    "VS_TINAJAS_MLV-226",
    "CHI_MLV-249",
    "VS_SELVA_MLV-275",
    "VS_PESQUERIA_MLV-296",
    "VS_SANPEDRO_MLV-319",
    "IMP_NACO",
    "Empaque",
    "TIEMPO_MAXIMO",
    "TIEMPO_MINIMO",
  ];

  // Objeto para almacenar los valores actuales de los atributos
  let attributesObject = {};

  // Traer los valores desde API
  attributeService
    .getEntityAttributes(params.entityId, "SERVER_SCOPE", attributesToRead)
    .subscribe((attributes) => {
      attributes.forEach((attribute) => {
        attributesObject[attribute.key] = attribute.value; // Guardar los valores
      });

      // Inserta en el HTML
      // estas variables se actualizan desde la API
      document.getElementById("tspan172-3-5-25").textContent =
        attributesObject["FYEH_FQYE01"];
      document.getElementById("tspan172-3-5-25-0").textContent =
        attributesObject["HER_FQY_015"];
      document.getElementById("tspan172-3").textContent =
        attributesObject["IMP_NACO_PC"];
      document.getElementById("tspan172-3-5-2-2").textContent =
        attributesObject["NAC_PT_903"];

    });

  // Funcon para modificar los valores con verificacion del valor ingresado (modificado 19/09/24)
  function cambiarValor(key, elementId) {
    var nuevoValor = prompt("Ingrese el nuevo valor:", attributesObject[key]);
    if (nuevoValor !== null && nuevoValor.trim() !== "") {
      // Reemplazar ',' por '.' y verificar si es un número válido utilizando expresión regular
      nuevoValor = nuevoValor.replace(",", ".");

      // Expresión regular para validar que el valor es un número flotante o entero válido
      var isValidNumber = /^-?\d+(\.\d+)?$/.test(nuevoValor);

      if (isValidNumber) {
        // Convertir el valor a float
        var parsedValue = parseFloat(nuevoValor);

        // Actualizar el valor en el objeto local
        attributesObject[key] = parsedValue;

        // Guardar el atributo actualizado en la API
        const attributesToSave = [{ key: key, value: parsedValue.toString() }];
        attributeService
          .saveEntityAttributes(
            params.entityId,
            "SERVER_SCOPE",
            attributesToSave
          )
          .subscribe(
            () => {
              console.log("Atributo actualizado con éxito:", key, parsedValue);
              document.getElementById(elementId).textContent = parsedValue;
            },
            (error) => {
              console.error("Error al actualizar el atributo:", error);
              alert("Hubo un error al guardar los cambios.");
            }
          );
      } else {
        // Mostrar mensaje de error al usuario si no es un valor numérico válido
        alert("Por favor, ingrese un valor numérico válido.");
      }
    }
  }

  // Event listeners for button clicks to change the values

  document
    .getElementById("text172-10-8")
    .addEventListener("click", () =>
      cambiarValor("FYEH_FQYE01", "tspan172-3-5-25")
    );
  document
    .getElementById("text172-10-4")
    .addEventListener("click", () =>
      cambiarValor("HER_FQY_015", "tspan172-3-5-25-0")
    );
  document
    .getElementById("text172-10")
    .addEventListener("click", () => cambiarValor("IMP_NACO_PC", "tspan172-3"));
  document
    .getElementById("text172-10-5")
    .addEventListener("click", () =>
      cambiarValor("NAC_PT_903", "tspan172-3-5-2-2")
    );
  // document.getElementById("text172-10-5-4").addEventListener("click", () => cambiarValor("VS_ZARAGOZA_MLV-037", "tspan172-3-5-2-2-0"));
  // document.getElementById("text172-10-5-4-9").addEventListener("click", () => cambiarValor("VS_CANANEA_MLV-057", "tspan172-3-5-2-2-0-6"));
  // document.getElementById("text172-10-6").addEventListener("click", () => cambiarValor("CUI_MLV-078", "tspan172-3-7"));
  // document.getElementById("text172-10-6-5").addEventListener("click", () => cambiarValor("VS_JACALITOS_MLV-101", "tspan172-3-7-6"));
  // document.getElementById("text172-10-6-8").addEventListener("click", () => cambiarValor("VS_IMURIS_MVL-125", "tspan172-3-7-3"));
  // document.getElementById("text172-10-6-0").addEventListener("click", () => cambiarValor("VS_MAGDALENA_MLV", "tspan172-3-7-1"));
  // document.getElementById("text172-10-5-4-9-4").addEventListener("click", () => cambiarValor("ANA_MLV-168", "tspan172-3-5-2-2-0-6-3"));
  // document.getElementById("text172-10-6-0-9-8").addEventListener("click", () => cambiarValor("VS_LLANO_MLV-186", "tspan172-3-7-1-2-2"));
  // document.getElementById("text172-10-6-0-9-2").addEventListener("click", () => cambiarValor("VS_BENAJMIN_MLV-206", "tspan172-3-7-1-2-1"));
  // document.getElementById("text172-10-6-0-9-4").addEventListener("click", () => cambiarValor("VS_TINAJAS_MLV-226", "tspan172-3-7-1-2-3"));
  // document.getElementById("text172-10-5-4-9-4-2").addEventListener("click", () => cambiarValor("CHI_MLV-249", "tspan172-3-5-2-2-0-6-3-3"));
  // document.getElementById("text172-10-6-0-9-8-7").addEventListener("click", () => cambiarValor("VS_SELVA_MLV-275", "tspan172-3-7-1-2-2-2"));
  // document.getElementById("text172-10-6-0-9-2-4").addEventListener("click", () => cambiarValor("VS_PESQUERIA_MLV-296", "tspan172-3-7-1-2-1-4"));
  // document.getElementById("text172-10-6-0-9-4-7").addEventListener("click", () => cambiarValor("VS_SANPEDRO_MLV-319", "tspan172-3-7-1-2-3-5"));
  // document.getElementById("text172-10-0").addEventListener("click", () => cambiarValor("IMP_NACO", "tspan172-3-0"));
  // document.getElementById("text172-10-66").addEventListener("click", () => cambiarValor("Empaque", "tspan172-3-8-5"));
  // document.getElementById("text172-10-66-7").addEventListener("click", () => cambiarValor("TIEMPO_MAXIMO", "tspan172-3-8"));
  // document.getElementById("text172-10-66-1").addEventListener("click", () => cambiarValor("TIEMPO_MINIMO", "tspan172-3-8-1"));

  //Fin codigo por api

  // Codigo para panning y zoom

  let svg = document.getElementById("svg1");
  let isPanning = false;
  let startX, startY;
  let scale = 1;
  let currentTranslateX = 0,
    currentTranslateY = 0;

  // Manejo del mouse para el panning
  svg.addEventListener("mousedown", function (e) {
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  svg.addEventListener("mousemove", function (e) {
    if (isPanning) {
      let dx = e.clientX - startX;
      let dy = e.clientY - startY;

      currentTranslateX += dx;
      currentTranslateY += dy;
      svg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${scale})`;

      startX = e.clientX;
      startY = e.clientY;
    }
  });

  svg.addEventListener("mouseup", function () {
    isPanning = false;
  });

  svg.addEventListener("mouseleave", function () {
    isPanning = false;
  });

  // Manejo de la rueda del mouse para el zoom
  svg.addEventListener("wheel", function (e) {
    e.preventDefault();

    let zoomIntensity = 0.1;
    if (e.deltaY > 0) {
      scale *= 1 - zoomIntensity;
    } else {
      scale *= 1 + zoomIntensity;
    }

    svg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${scale})`;
  });

  // fin codigo svg

  // Función para consultar y actualizar los valores
  function actualizarValores() {
    // Realizar la solicitud a la API para obtener los valores actualizados
    attributeService
      .getEntityAttributes(params.entityId, "SERVER_SCOPE", attributesToRead)
      .subscribe((attributes) => {
        let updated = false;

        attributes.forEach((attribute) => {
          const oldValue = attributesObject[attribute.key];
          const newValue = attribute.value;

          if (oldValue !== newValue) {
            updated = true;
            attributesObject[attribute.key] = newValue;

            // Actualizar el HTML con los nuevos valores
            if (attribute.key === "FYEH_FQYE01") {
              document.getElementById("tspan172-3-5-25").textContent = newValue;
            }
            if (attribute.key === "HER_FQY_015") {
              document.getElementById("tspan172-3-5-25-0").textContent =
                newValue;
            }
            if (attribute.key === "IMP_NACO_PC") {
              document.getElementById("tspan172-3").textContent = newValue;
            }
            if (attribute.key === "NAC_PT_903") {
              document.getElementById("tspan172-3-5-2-2").textContent =
                newValue;
            }
            if (attribute.key === "VS_ZARAGOZA_MLV-037") {
              document.getElementById("tspan172-3-5-2-2-0").textContent =
                newValue;
            }
            if (attribute.key === "VS_CANANEA_MLV-057") {
              document.getElementById("tspan172-3-5-2-2-0-6").textContent =
                newValue;
            }
            if (attribute.key === "CUI_MLV-078") {
              document.getElementById("tspan172-3-7").textContent = newValue;
            }
            if (attribute.key === "VS_JACALITOS_MLV-101") {
              document.getElementById("tspan172-3-7-6").textContent = newValue;
            }
            if (attribute.key === "VS_IMURIS_MVL-125") {
              document.getElementById("tspan172-3-7-3").textContent = newValue;
            }
            if (attribute.key === "VS_MAGDALENA_MLV") {
              document.getElementById("tspan172-3-7-1").textContent = newValue;
            }
            if (attribute.key === "ANA_MLV-168") {
              document.getElementById("tspan172-3-5-2-2-0-6-3").textContent =
                newValue;
            }
            if (attribute.key === "VS_LLANO_MLV-186") {
              document.getElementById("tspan172-3-7-1-2-2").textContent =
                newValue;
            }
            if (attribute.key === "VS_BENAJMIN_MLV-206") {
              document.getElementById("tspan172-3-7-1-2-1").textContent =
                newValue;
            }
            if (attribute.key === "VS_TINAJAS_MLV-226") {
              document.getElementById("tspan172-3-7-1-2-3").textContent =
                newValue;
            }
            if (attribute.key === "CHI_MLV-249") {
              document.getElementById("tspan172-3-5-2-2-0-6-3-3").textContent =
                newValue;
            }
            if (attribute.key === "VS_SELVA_MLV-275") {
              document.getElementById("tspan172-3-7-1-2-2-2").textContent =
                newValue;
            }
            if (attribute.key === "VS_PESQUERIA_MLV-296") {
              document.getElementById("tspan172-3-7-1-2-1-4").textContent =
                newValue;
            }
            if (attribute.key === "VS_SANPEDRO_MLV-319") {
              document.getElementById("tspan172-3-7-1-2-3-5").textContent =
                newValue;
            }
            if (attribute.key === "IMP_NACO") {
              document.getElementById("tspan172-3-0").textContent = newValue;
            }
            if (attribute.key === "Empaque") {
              document.getElementById("tspan172-3-8-5").textContent = newValue;
            }
            if (attribute.key === "TIEMPO_MAXIMO") {
              document.getElementById("tspan172-3-8").textContent = newValue;
            }
            if (attribute.key === "TIEMPO_MINIMO") {
              document.getElementById("tspan172-3-8-1").textContent = newValue;
            }
          }
        });

        if (updated) {
          console.log("Los valores han sido actualizados en la página.");
        }
      });
  }

  // Establecer un intervalo para consultar y actualizar los valores cada 5 segundos
  const intervalId = setInterval(actualizarValores, 5000);

  // Si quieres detener el polling en algún momento, puedes usar clearInterval(intervalId);

  // Limpiar el intervalo cuando el widget se destruya para evitar fugas de memoria
  self.onDestroy = function () {
    clearInterval(intervalId);
  };

  self.onResize();
};

self.onDataUpdated = function () {
    
      // codigo para actualizar variables por medio del acceso al contexto

      //preparacion del array de salida
      // Arreglo con las variables que queremos consultar
      const variablesToCheck = [
        "ANA_MLV-168",
        "CHI_MLV-249",
        "CUI_MLV-078",
        "Empaque",
        "IMP_NACO",
        "VS_BENAJMIN_MLV-206",
        "VS_CANANEA_MLV-057",
        "VS_IMURIS_MVL-125",
        "VS_JACALITOS_MLV-101",
        "VS_LLANO_MLV-186",
        "VS_MAGDALENA_MLV",
        "VS_PESQUERIA_MLV-296",
        "VS_SANPEDRO_MLV-319",
        "VS_SELVA_MLV-275",
        "VS_TINAJAS_MLV-226",
        "VS_ZARAGOZA_MLV-037",
        "Tiempo a Mínimo Inventario",
        "Tiempo a Máximo Inventario",
      ];

      let outputObject = {};

      // Iterar sobre el arreglo de datos
      self.ctx.data.forEach((item) => {
        // Asegurarse de que hay datos
        if (item.data && item.data.length > 0) {
          const name = item.dataKey.name; // Asegúrate de que dataKey esté presente

          // Verificar si el nombre está en las variables a consultar
          if (variablesToCheck.includes(name)) {
            item.data.forEach((dataItem) => {
              // Verificar que haya suficientes elementos
              if (dataItem.length > 1) {
                let value = dataItem[1]; // Suponiendo que el valor está en la posición 1

                // Solo agregar si el valor no es nulo o vacío
                if (value !== null && value !== "") {
                  // Verificar si el valor es de tipo string y convertirlo a número si es necesario
                  if (typeof value === "string") {
                    value = parseFloat(value); // Intentar convertir el string a número
                  }

                  // Solo proceder si value es un número válido
                  if (!isNaN(value)) {
                    // Caso especial para "Tiempo a Mínimo Inventario" y "Tiempo a Máximo Inventario"
                    if (
                      name === "Tiempo a Mínimo Inventario" ||
                      name === "Tiempo a Máximo Inventario"
                    ) {
                      // Convertir de segundos a horas y redondear al número entero más cercano
                      const hoursValue = Math.floor(value / 3600); // Redondear a entero (sin decimales)
                      outputObject[name] = hoursValue; // Guardar en horas sin decimales
                    } else {
                      // Para otros casos, limitar el valor a 2 decimales
                      const limitedValue = parseFloat(value.toFixed(2));
                      outputObject[name] = limitedValue; // Agregar al objeto
                    }
                  } else {
                    console.log(`Valor inválido: ${value} en ${name}`);
                  }
                }
              } else {
                console.log("No hay suficientes elementos en:", dataItem);
              }
            });
          }
        } else {
          console.log("No hay datos disponibles para el item:", item);
        }
      });

      // Imprimir el objeto de salida
      console.log(outputObject);

      //llena los html con la salida de outputObject

      document.getElementById("tspan172-3-5-2-2-0").textContent =
        outputObject["VS_ZARAGOZA_MLV-037"] || "";
      document.getElementById("tspan172-3-5-2-2-0-6").textContent =
        outputObject["VS_CANANEA_MLV-057"] || "";
      document.getElementById("tspan172-3-7").textContent =
        outputObject["CUI_MLV-078"] || "";
      document.getElementById("tspan172-3-7-6").textContent =
        outputObject["VS_JACALITOS_MLV-101"] || "";
      document.getElementById("tspan172-3-7-3").textContent =
        outputObject["VS_IMURIS_MVL-125"] || "";
      document.getElementById("tspan172-3-7-1").textContent =
        outputObject["VS_MAGDALENA_MLV"] || "";
      document.getElementById("tspan172-3-5-2-2-0-6-3").textContent =
        outputObject["ANA_MLV-168"] || "";
      document.getElementById("tspan172-3-7-1-2-2").textContent =
        outputObject["VS_LLANO_MLV-186"] || "";
      document.getElementById("tspan172-3-7-1-2-1").textContent =
        outputObject["VS_BENAJMIN_MLV-206"] || "";
      document.getElementById("tspan172-3-7-1-2-3").textContent =
        outputObject["VS_TINAJAS_MLV-226"] || "";
      document.getElementById("tspan172-3-5-2-2-0-6-3-3").textContent =
        outputObject["CHI_MLV-249"] || "";
      document.getElementById("tspan172-3-7-1-2-2-2").textContent =
        outputObject["VS_SELVA_MLV-275"] || "";
      document.getElementById("tspan172-3-7-1-2-1-4").textContent =
        outputObject["VS_PESQUERIA_MLV-296"] || "";
      document.getElementById("tspan172-3-7-1-2-3-5").textContent =
        outputObject["VS_SANPEDRO_MLV-319"] || "";
      document.getElementById("tspan172-3-0").textContent =
        outputObject["IMP_NACO"] || "";
      document.getElementById("tspan172-3-8-5").textContent =
        outputObject["Empaque"] || "";
      document.getElementById("tspan172-3-8").textContent =
        outputObject["Tiempo a Máximo Inventario"] !== undefined
          ? outputObject["Tiempo a Máximo Inventario"]
          : "";
      document.getElementById("tspan172-3-8-1").textContent =
        outputObject["Tiempo a Mínimo Inventario"] !== undefined
          ? outputObject["Tiempo a Mínimo Inventario"]
          : "";
};

self.onResize = function () {
  // (El resto del código permanece igual)
};

self.onDestroy = function () {
  // (El resto del código permanece igual)
};
