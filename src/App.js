import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Calculator } from "react-mac-calculator";

let clientes = [
  { id: 0, nombre: "Juan", apellido: "Camacho", sexo: "Masculino", direccion: "Naguanagua", telefono: "04244438768" },
  { id: 1, nombre: "Manuel", apellido: "Garcia", sexo: "Masculino", direccion: "San Diego", telefono: "04248745321" },
  { id: 2, nombre: "Elena", apellido: "Ojeda", sexo: "Femenino", direccion: "Valencia", telefono: "04243856424" },
  { id: 3, nombre: "Pablo", apellido: "Francis", sexo: "Masculino", direccion: "Naguanagua", telefono: "04169693243" },
  { id: 4, nombre: "Wilmer", apellido: "Herna", sexo: "Masculino", direccion: "Santa Rosa", telefono: "04125565643" },
];

let empleados = [
  {
    id: 0,
    nombre: "Juan",
    apellido: "Camacho",
    sexo: "Masculino",
    direccion: "Naguanagua",
    telefono: "04244438768",
    clave: "qwertyytrewq",
  },
  {
    id: 1,
    nombre: "Diana",
    apellido: "Abreu",
    sexo: "Femenino",
    direccion: "Naguanagua",
    telefono: "04248987687",
    clave: "fbhsdbvfjdbf",
  },
  {
    id: 2,
    nombre: "Daniel",
    apellido: "Jimenez",
    sexo: "Masculino",
    direccion: "Isabelica",
    telefono: "04146578767",
    clave: "dfbwfuiweuifwue",
  },
];

let ventas = [
  { id: 0, dia: "13", mes: "9", ano: "2020", totalBolivares: "15367322" },
  { id: 1, dia: "23", mes: "8", ano: "2019", totalBolivares: "234632478" },
  { id: 2, dia: "14", mes: "10", ano: "2020", totalBolivares: "47238732" },
  { id: 3, dia: "4", mes: "11", ano: "2019", totalBolivares: "23472378" },
  { id: 4, dia: "10", mes: "2", ano: "2020", totalBolivares: "324723677" },
  { id: 5, dia: "9", mes: "3", ano: "2018", totalBolivares: "2384892378" },
  { id: 6, dia: "9", mes: "6", ano: "2020", totalBolivares: "237428" },
  { id: 7, dia: "14", mes: "1", ano: "2020", totalBolivares: "3822389" },
  { id: 8, dia: "9", mes: "8", ano: "2020", totalBolivares: "12127823" },
];

let comidas = [
  { id: 0, nombre: "Empanada", descripcion: "Masa frita de harina de maiz", precioBolivares: "500000" },
  { id: 1, nombre: "Hamburguesa", descripcion: "Carne asada con pan y salsas", precioBolivares: "1000000" },
  { id: 2, nombre: "Camaron", descripcion: "Animal marino", precioBolivares: "500000" },
  { id: 3, nombre: "Dona", descripcion: "Masa dulce horneada", precioBolivares: "700000" },
  { id: 4, nombre: "Pizza", descripcion: "Masa horneada con salsa y queso", precioBolivares: "1500000" },
  { id: 5, nombre: "Sushi", descripcion: "Pescado envuelto en arroz", precioBolivares: "2000000" },
];

let estado = {
  clientes,
  empleados,
  ventas,
  comidas,
};

if (!window.localStorage.getItem("estado")) window.localStorage.setItem("estado", JSON.stringify(estado));

const estadoContext = createContext();

const Cliente = ({ id, nombre, apellido, sexo, direccion, telefono, show }) => {
  const [modificar, setModificar] = useState(false);
  const [state, setState] = useContext(estadoContext);

  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevoApellido, setNuevoApellido] = useState(apellido);
  const [nuevoSexo, setNuevoSexo] = useState(sexo);
  const [nuevoDireccion, setNuevoDireccion] = useState(direccion);
  const [nuevoTelefono, setNuevoTelefono] = useState(telefono);

  const eliminarCliente = () => {
    if (window.confirm(`Seguro que quiere eliminar el cliente de id=${id}`)) {
      setState(state => {
        const clientesNuevos = state.clientes.filter(cliente => cliente.id !== id);
        return { ...state, clientes: clientesNuevos };
      });
    }
  };

  const modificarCliente = () => {
    if (window.confirm(`Seguro que quiere modificar el cliente de id=${id}`)) {
      setState(state => {
        const clientesNuevos = state.clientes.map(cliente => {
          if (cliente.id === id) {
            return {
              id,
              nombre: nuevoNombre,
              apellido: nuevoApellido,
              sexo: nuevoSexo,
              direccion: nuevoDireccion,
              telefono: nuevoTelefono,
            };
          } else return cliente;
        });

        return { ...state, clientes: clientesNuevos };
      });
    }

    setModificar(false);
  };

  if (!show) return null;

  if (modificar)
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input onChange={e => setNuevoNombre(e.target.value)} defaultValue={nombre} />
        </td>
        <td>
          <input onChange={e => setNuevoApellido(e.target.value)} defaultValue={apellido} />
        </td>
        <td>
          <input onChange={e => setNuevoSexo(e.target.value)} defaultValue={sexo} />
        </td>
        <td>
          <input onChange={e => setNuevoDireccion(e.target.value)} defaultValue={direccion} />
        </td>
        <td>
          <input onChange={e => setNuevoTelefono(e.target.value)} defaultValue={telefono} />
        </td>
        <td>
          <Button style={{ marginRight: "16px" }} onClick={modificarCliente}>
            Aceptar
          </Button>
          <Button onClick={() => setModificar(false)}>Cancelar</Button>
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{sexo}</td>
      <td>{direccion}</td>
      <td>{telefono}</td>
      <td>
        <Button style={{ marginRight: "16px" }} onClick={() => setModificar(true)}>
          Modificar
        </Button>
        <Button onClick={eliminarCliente}>Eliminar</Button>
      </td>
    </tr>
  );
};

const Clientes = () => {
  const [state, setState] = useContext(estadoContext);

  const [showAgregarCliente, setShowAgregarCliente] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoApellido, setNuevoApellido] = useState("");
  const [nuevoSexo, setNuevoSexo] = useState("");
  const [nuevoDireccion, setNuevoDireccion] = useState("");
  const [nuevoTelefono, setNuevoTelefono] = useState("");

  const [buscarId, setBuscarId] = useState("");
  const [buscarNombre, setBuscarNombre] = useState("");
  const [buscarApellido, setBuscarApellido] = useState("");
  const [buscarSexo, setBuscarSexo] = useState("");
  const [buscarDireccion, setBuscarDireccion] = useState("");
  const [buscarTelefono, setBuscarTelefono] = useState("");

  let clientesIdFiltrados = state.clientes.map(cliente => {
    if (
      String(cliente.id).toLowerCase().startsWith(buscarId.toLowerCase()) &&
      cliente.nombre.toLowerCase().startsWith(buscarNombre.toLowerCase()) &&
      cliente.apellido.toLowerCase().startsWith(buscarApellido.toLowerCase()) &&
      cliente.sexo.toLowerCase().startsWith(buscarSexo.toLowerCase()) &&
      cliente.direccion.toLowerCase().startsWith(buscarDireccion.toLowerCase()) &&
      cliente.telefono.toLowerCase().startsWith(buscarTelefono.toLowerCase())
    )
      return cliente.id;
    else return null;
  });

  clientesIdFiltrados = clientesIdFiltrados.filter(clienteId => clienteId !== null);

  const agregarCliente = () => {
    if (!nuevoNombre || !nuevoApellido || !nuevoSexo || !nuevoDireccion || !nuevoTelefono) {
      alert("Todos los campos deben ser llenados");
      return;
    }

    const nuevoId = state.clientes.length === 0 ? 0 : state.clientes[state.clientes.length - 1].id + 1;
    const clientesNuevos = [
      ...state.clientes,
      {
        id: nuevoId,
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        sexo: nuevoSexo,
        direccion: nuevoDireccion,
        telefono: nuevoTelefono,
      },
    ];

    setState(state => {
      return { ...state, clientes: clientesNuevos };
    });

    setShowAgregarCliente(false);
  };

  return (
    <>
      <h1>Clientes</h1>

      {showAgregarCliente ? (
        <>
          <input onChange={e => setNuevoNombre(e.target.value)} placeholder="Nuevo Nombre" />
          <input onChange={e => setNuevoApellido(e.target.value)} placeholder="Nuevo Apellido" />
          <input onChange={e => setNuevoSexo(e.target.value)} placeholder="Nuevo Sexo" />
          <input onChange={e => setNuevoDireccion(e.target.value)} placeholder="Nueva Direccion" />
          <input onChange={e => setNuevoTelefono(e.target.value)} placeholder="Nuevo Telefono" />

          <Button style={{ marginInline: "16px" }} onClick={agregarCliente}>
            Agregar
          </Button>
          <Button onClick={() => setShowAgregarCliente(false)}>Cancelar</Button>
        </>
      ) : (
        <Button onClick={() => setShowAgregarCliente(true)}>Agregar cliente nuevo</Button>
      )}

      <br />

      {!showAgregarCliente ? (
        <>
          <input onChange={e => setBuscarId(e.target.value)} placeholder="Buscar Id" />
          <input onChange={e => setBuscarNombre(e.target.value)} placeholder="Buscar Nombre" />
          <input onChange={e => setBuscarApellido(e.target.value)} placeholder="Buscar Apellido" />
          <input onChange={e => setBuscarSexo(e.target.value)} placeholder="Buscar Sexo" />
          <input onChange={e => setBuscarDireccion(e.target.value)} placeholder="Buscar Direccion" />
          <input onChange={e => setBuscarTelefono(e.target.value)} placeholder="Buscar Telefono" />
        </>
      ) : null}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Sexo</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.clientes.map(cliente => (
            <Cliente show={clientesIdFiltrados.includes(cliente.id)} {...cliente} key={cliente.id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Empleado = ({ id, nombre, apellido, sexo, direccion, telefono, clave, show }) => {
  const [modificar, setModificar] = useState(false);
  const [state, setState] = useContext(estadoContext);

  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevoApellido, setNuevoApellido] = useState(apellido);
  const [nuevoSexo, setNuevoSexo] = useState(sexo);
  const [nuevoDireccion, setNuevoDireccion] = useState(direccion);
  const [nuevoTelefono, setNuevoTelefono] = useState(telefono);
  const [nuevoClave, setNuevoClave] = useState(clave);

  const eliminarEmpleado = () => {
    if (window.confirm(`Seguro que quiere eliminar el empleado de id=${id}`)) {
      setState(state => {
        const empleadosNuevos = state.empleados.filter(empleado => empleado.id !== id);
        return { ...state, empleados: empleadosNuevos };
      });
    }
  };

  const modificarEmpleado = () => {
    if (window.confirm(`Seguro que quiere modificar el empleado de id=${id}`)) {
      setState(state => {
        const empleadosNuevos = state.empleados.map(empleado => {
          if (empleado.id === id) {
            return {
              id,
              nombre: nuevoNombre,
              apellido: nuevoApellido,
              sexo: nuevoSexo,
              direccion: nuevoDireccion,
              telefono: nuevoTelefono,
              clave: nuevoClave,
            };
          } else return empleado;
        });

        return { ...state, empleados: empleadosNuevos };
      });
    }

    setModificar(false);
  };

  if (!show) return null;

  if (modificar)
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input onChange={e => setNuevoNombre(e.target.value)} defaultValue={nombre} />
        </td>
        <td>
          <input onChange={e => setNuevoApellido(e.target.value)} defaultValue={apellido} />
        </td>
        <td>
          <input onChange={e => setNuevoSexo(e.target.value)} defaultValue={sexo} />
        </td>
        <td>
          <input onChange={e => setNuevoDireccion(e.target.value)} defaultValue={direccion} />
        </td>
        <td>
          <input onChange={e => setNuevoTelefono(e.target.value)} defaultValue={telefono} />
        </td>
        <td>
          <input onChange={e => setNuevoClave(e.target.value)} defaultValue={clave} />
        </td>
        <td>
          <Button style={{ marginRight: "16px" }} onClick={modificarEmpleado}>
            Aceptar
          </Button>
          <Button onClick={() => setModificar(false)}>Cancelar</Button>
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{sexo}</td>
      <td>{direccion}</td>
      <td>{telefono}</td>
      <td>{clave}</td>
      <td>
        <Button style={{ marginRight: "16px" }} onClick={() => setModificar(true)}>
          Modificar
        </Button>
        <Button onClick={eliminarEmpleado}>Eliminar</Button>
      </td>
    </tr>
  );
};

const Empleados = () => {
  const [state, setState] = useContext(estadoContext);

  const [showAgregarEmpleado, setShowAgregarEmpleado] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoApellido, setNuevoApellido] = useState("");
  const [nuevoSexo, setNuevoSexo] = useState("");
  const [nuevoDireccion, setNuevoDireccion] = useState("");
  const [nuevoTelefono, setNuevoTelefono] = useState("");
  const [nuevoClave, setNuevoClave] = useState("");

  const [buscarId, setBuscarId] = useState("");
  const [buscarNombre, setBuscarNombre] = useState("");
  const [buscarApellido, setBuscarApellido] = useState("");
  const [buscarSexo, setBuscarSexo] = useState("");
  const [buscarDireccion, setBuscarDireccion] = useState("");
  const [buscarTelefono, setBuscarTelefono] = useState("");
  const [buscarClave, setBuscarClave] = useState("");

  let empleadosIdFiltrados = state.empleados.map(empleado => {
    if (
      String(empleado.id).toLowerCase().startsWith(buscarId.toLowerCase()) &&
      empleado.nombre.toLowerCase().startsWith(buscarNombre.toLowerCase()) &&
      empleado.apellido.toLowerCase().startsWith(buscarApellido.toLowerCase()) &&
      empleado.sexo.toLowerCase().startsWith(buscarSexo.toLowerCase()) &&
      empleado.direccion.toLowerCase().startsWith(buscarDireccion.toLowerCase()) &&
      empleado.telefono.toLowerCase().startsWith(buscarTelefono.toLowerCase()) &&
      empleado.clave.toLowerCase().startsWith(buscarClave.toLowerCase())
    )
      return empleado.id;
    else return null;
  });

  empleadosIdFiltrados = empleadosIdFiltrados.filter(empleadoId => empleadoId !== null);

  const agregarEmpleado = () => {
    if (!nuevoNombre || !nuevoApellido || !nuevoSexo || !nuevoDireccion || !nuevoTelefono || !nuevoClave) {
      alert("Todos los campos deben ser llenados");
      return;
    }

    const nuevoId = state.empleados.length === 0 ? 0 : state.empleados[state.empleados.length - 1].id + 1;
    const empleadosNuevos = [
      ...state.empleados,
      {
        id: nuevoId,
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        sexo: nuevoSexo,
        direccion: nuevoDireccion,
        telefono: nuevoTelefono,
        clave: nuevoClave,
      },
    ];

    setState(state => {
      return { ...state, empleados: empleadosNuevos };
    });

    setShowAgregarEmpleado(false);
  };

  return (
    <>
      <h1>Empleados</h1>

      {showAgregarEmpleado ? (
        <>
          <input onChange={e => setNuevoNombre(e.target.value)} placeholder="Nuevo Nombre" />
          <input onChange={e => setNuevoApellido(e.target.value)} placeholder="Nuevo Apellido" />
          <input onChange={e => setNuevoSexo(e.target.value)} placeholder="Nuevo Sexo" />
          <input onChange={e => setNuevoDireccion(e.target.value)} placeholder="Nueva Direccion" />
          <input onChange={e => setNuevoTelefono(e.target.value)} placeholder="Nuevo Telefono" />
          <input onChange={e => setNuevoClave(e.target.value)} placeholder="Nueva Clave" />

          <Button style={{ marginInline: "16px" }} onClick={agregarEmpleado}>
            Agregar
          </Button>
          <Button onClick={() => setShowAgregarEmpleado(false)}>Cancelar</Button>
        </>
      ) : (
        <Button onClick={() => setShowAgregarEmpleado(true)}>Agregar empleado nuevo</Button>
      )}

      <br />

      {!showAgregarEmpleado ? (
        <>
          <input onChange={e => setBuscarId(e.target.value)} placeholder="Buscar Id" />
          <input onChange={e => setBuscarNombre(e.target.value)} placeholder="Buscar Nombre" />
          <input onChange={e => setBuscarApellido(e.target.value)} placeholder="Buscar Apellido" />
          <input onChange={e => setBuscarSexo(e.target.value)} placeholder="Buscar Sexo" />
          <input onChange={e => setBuscarDireccion(e.target.value)} placeholder="Buscar Direccion" />
          <input onChange={e => setBuscarTelefono(e.target.value)} placeholder="Buscar Telefono" />
          <input onChange={e => setBuscarClave(e.target.value)} placeholder="Buscar Clave" />
        </>
      ) : null}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Sexo</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Clave</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.empleados.map(empleado => (
            <Empleado show={empleadosIdFiltrados.includes(empleado.id)} {...empleado} key={empleado.id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Venta = ({ id, dia, mes, ano, totalBolivares, show }) => {
  const [modificar, setModificar] = useState(false);
  const [state, setState] = useContext(estadoContext);

  const [nuevoDia, setNuevoDia] = useState(dia);
  const [nuevoMes, setNuevoMes] = useState(mes);
  const [nuevoAno, setNuevoAno] = useState(ano);
  const [nuevoTotalBolivares, setNuevoTotalBolivares] = useState(totalBolivares);

  const eliminarVenta = () => {
    if (window.confirm(`Seguro que quiere eliminar la venta de id=${id}`)) {
      setState(state => {
        const ventasNuevas = state.ventas.filter(venta => venta.id !== id);
        return { ...state, ventas: ventasNuevas };
      });
    }
  };

  const modificarVenta = () => {
    if (window.confirm(`Seguro que quiere modificar la venta de id=${id}`)) {
      setState(state => {
        const ventasNuevas = state.ventas.map(venta => {
          if (venta.id === id) {
            return {
              id,
              dia: nuevoDia,
              mes: nuevoMes,
              ano: nuevoAno,
              totalBolivares: nuevoTotalBolivares,
            };
          } else return venta;
        });

        return { ...state, ventas: ventasNuevas };
      });
    }

    setModificar(false);
  };

  if (!show) return null;

  if (modificar)
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input onChange={e => setNuevoDia(e.target.value)} defaultValue={dia} />
        </td>
        <td>
          <input onChange={e => setNuevoMes(e.target.value)} defaultValue={mes} />
        </td>
        <td>
          <input onChange={e => setNuevoAno(e.target.value)} defaultValue={ano} />
        </td>
        <td>
          <input onChange={e => setNuevoTotalBolivares(e.target.value)} defaultValue={totalBolivares} />
        </td>
        <td>
          <Button style={{ marginRight: "16px" }} onClick={modificarVenta}>
            Aceptar
          </Button>
          <Button onClick={() => setModificar(false)}>Cancelar</Button>
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{id}</td>
      <td>{dia}</td>
      <td>{mes}</td>
      <td>{ano}</td>
      <td>{totalBolivares}</td>
      <td>
        <Button style={{ marginRight: "16px" }} onClick={() => setModificar(true)}>
          Modificar
        </Button>
        <Button onClick={eliminarVenta}>Eliminar</Button>
      </td>
    </tr>
  );
};

const Ventas = () => {
  const [state, setState] = useContext(estadoContext);

  const [showAgregarVenta, setShowAgregarVenta] = useState(false);
  const [nuevoDia, setNuevoDia] = useState("");
  const [nuevoMes, setNuevoMes] = useState("");
  const [nuevoAno, setNuevoAno] = useState("");
  const [nuevoTotalBolivares, setNuevoTotalBolivares] = useState("");

  const [buscarId, setBuscarId] = useState("");
  const [buscarDia, setBuscarDia] = useState("");
  const [buscarMes, setBuscarMes] = useState("");
  const [buscarAno, setBuscarAno] = useState("");
  const [buscarTotalBolivares, setBuscarBolivares] = useState("");

  let ventasIdFiltradas = state.ventas.map(venta => {
    if (
      String(venta.id).toLowerCase().startsWith(buscarId.toLowerCase()) &&
      venta.dia.toLowerCase().startsWith(buscarDia.toLowerCase()) &&
      venta.mes.toLowerCase().startsWith(buscarMes.toLowerCase()) &&
      venta.ano.toLowerCase().startsWith(buscarAno.toLowerCase()) &&
      venta.totalBolivares.toLowerCase().startsWith(buscarTotalBolivares.toLowerCase())
    )
      return venta.id;
    else return null;
  });

  ventasIdFiltradas = ventasIdFiltradas.filter(ventaId => ventaId !== null);

  const agregarVenta = () => {
    if (!nuevoDia || !nuevoMes || !nuevoAno || !nuevoTotalBolivares) {
      alert("Todos los campos deben ser llenados");
      return;
    }

    const nuevoId = state.ventas.length === 0 ? 0 : state.ventas[state.ventas.length - 1].id + 1;
    const ventasNuevas = [
      ...state.ventas,
      {
        id: nuevoId,
        dia: nuevoDia,
        mes: nuevoMes,
        ano: nuevoAno,
        totalBolivares: nuevoTotalBolivares,
      },
    ];

    setState(state => {
      return { ...state, ventas: ventasNuevas };
    });

    setShowAgregarVenta(false);
  };

  return (
    <>
      <h1>Ventas</h1>

      {showAgregarVenta ? (
        <>
          <input onChange={e => setNuevoDia(e.target.value)} placeholder="Nuevo Dia" />
          <input onChange={e => setNuevoMes(e.target.value)} placeholder="Nuevo Mes" />
          <input onChange={e => setNuevoAno(e.target.value)} placeholder="Nuevo Año" />
          <input onChange={e => setNuevoTotalBolivares(e.target.value)} placeholder="Nuevo Total Bolivares" />

          <Button style={{ marginInline: "16px" }} onClick={agregarVenta}>
            Agregar
          </Button>
          <Button onClick={() => setShowAgregarVenta(false)}>Cancelar</Button>
        </>
      ) : (
        <Button onClick={() => setShowAgregarVenta(true)}>Agregar venta nueva</Button>
      )}

      <br />

      {!showAgregarVenta ? (
        <>
          <input onChange={e => setBuscarId(e.target.value)} placeholder="Buscar Id" />
          <input onChange={e => setBuscarDia(e.target.value)} placeholder="Buscar Dia" />
          <input onChange={e => setBuscarMes(e.target.value)} placeholder="Buscar Mes" />
          <input onChange={e => setBuscarAno(e.target.value)} placeholder="Buscar Año" />
          <input onChange={e => setBuscarBolivares(e.target.value)} placeholder="Buscar Total Bolivares" />
        </>
      ) : null}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Dia</th>
            <th>Mes</th>
            <th>Año</th>
            <th>Total Bolivares</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.ventas.map(venta => (
            <Venta show={ventasIdFiltradas.includes(venta.id)} {...venta} key={venta.id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Comida = ({ id, nombre, descripcion, precioBolivares, show }) => {
  const [modificar, setModificar] = useState(false);
  const [state, setState] = useContext(estadoContext);

  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevoDescripcion, setNuevoDescripcion] = useState(descripcion);
  const [nuevoPrecioBolivares, setNuevoPrecioBolivares] = useState(precioBolivares);

  const eliminarComida = () => {
    if (window.confirm(`Seguro que quiere eliminar la comida de id=${id}`)) {
      setState(state => {
        const comidasNuevas = state.comidas.filter(comida => comida.id !== id);
        return { ...state, comidas: comidasNuevas };
      });
    }
  };

  const modificarComida = () => {
    if (window.confirm(`Seguro que quiere modificar la comida de id=${id}`)) {
      setState(state => {
        const comidasNuevas = state.comidas.map(comida => {
          if (comida.id === id) {
            return {
              id,
              nombre: nuevoNombre,
              descripcion: nuevoDescripcion,
              precioBolivares: nuevoPrecioBolivares,
            };
          } else return comida;
        });

        return { ...state, comidas: comidasNuevas };
      });
    }

    setModificar(false);
  };

  if (!show) return null;

  if (modificar)
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input onChange={e => setNuevoNombre(e.target.value)} defaultValue={nombre} />
        </td>
        <td>
          <input onChange={e => setNuevoDescripcion(e.target.value)} defaultValue={descripcion} />
        </td>
        <td>
          <input onChange={e => setNuevoPrecioBolivares(e.target.value)} defaultValue={precioBolivares} />
        </td>
        <td>
          <Button style={{ marginRight: "16px" }} onClick={modificarComida}>
            Aceptar
          </Button>
          <Button onClick={() => setModificar(false)}>Cancelar</Button>
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{descripcion}</td>
      <td>{precioBolivares}</td>
      <td>
        <Button style={{ marginRight: "16px" }} onClick={() => setModificar(true)}>
          Modificar
        </Button>
        <Button onClick={eliminarComida}>Eliminar</Button>
      </td>
    </tr>
  );
};

const Comidas = () => {
  const [state, setState] = useContext(estadoContext);

  const [showAgregarComida, setShowAgregarComida] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoDescripcion, setNuevoDescripcion] = useState("");
  const [nuevoPrecioBolivares, setNuevoPrecioBolivares] = useState("");

  const [buscarId, setBuscarId] = useState("");
  const [buscarNombre, setBuscarNombre] = useState("");
  const [buscarDescripcion, setBuscarDescripcion] = useState("");
  const [buscarPrecioBolivares, setBuscarPrecioBolivares] = useState("");

  let comidasIdFiltradas = state.comidas.map(comida => {
    if (
      String(comida.id).toLowerCase().startsWith(buscarId.toLowerCase()) &&
      comida.nombre.toLowerCase().startsWith(buscarNombre.toLowerCase()) &&
      comida.descripcion.toLowerCase().startsWith(buscarDescripcion.toLowerCase()) &&
      comida.precioBolivares.toLowerCase().startsWith(buscarPrecioBolivares.toLowerCase())
    )
      return comida.id;
    else return null;
  });

  comidasIdFiltradas = comidasIdFiltradas.filter(comidaId => comidaId !== null);

  const agregarComida = () => {
    if (!nuevoNombre || !nuevoDescripcion || !nuevoPrecioBolivares) {
      alert("Todos los campos deben ser llenados");
      return;
    }

    const nuevoId = state.comidas.length === 0 ? 0 : state.comidas[state.comidas.length - 1].id + 1;
    const comidasNuevas = [
      ...state.comidas,
      {
        id: nuevoId,
        nombre: nuevoNombre,
        descripcion: nuevoDescripcion,
        precioBolivares: nuevoPrecioBolivares,
      },
    ];

    setState(state => {
      return { ...state, comidas: comidasNuevas };
    });

    setShowAgregarComida(false);
  };

  return (
    <>
      <h1>Comidas</h1>

      {showAgregarComida ? (
        <>
          <input onChange={e => setNuevoNombre(e.target.value)} placeholder="Nuevo Nombre" />
          <input onChange={e => setNuevoDescripcion(e.target.value)} placeholder="Nueva Descripcion" />
          <input onChange={e => setNuevoPrecioBolivares(e.target.value)} placeholder="Nuevo Precio Bolivares" />

          <Button style={{ marginInline: "16px" }} onClick={agregarComida}>
            Agregar
          </Button>
          <Button onClick={() => setShowAgregarComida(false)}>Cancelar</Button>
        </>
      ) : (
        <Button onClick={() => setShowAgregarComida(true)}>Agregar comida nueva</Button>
      )}

      <br />

      {!showAgregarComida ? (
        <>
          <input onChange={e => setBuscarId(e.target.value)} placeholder="Buscar Id" />
          <input onChange={e => setBuscarNombre(e.target.value)} placeholder="Buscar Nombre" />
          <input onChange={e => setBuscarDescripcion(e.target.value)} placeholder="Buscar Descripcion" />
          <input onChange={e => setBuscarPrecioBolivares(e.target.value)} placeholder="Buscar Precio Bolivares" />
        </>
      ) : null}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio Bolivares</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.comidas.map(comida => (
            <Comida show={comidasIdFiltradas.includes(comida.id)} {...comida} key={comida.id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Login = ({ setLogged }) => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleLogin = () => {
    if (usuario === "prueba" && clave === "clave1234") setLogged(true);
    else alert("Contraseña incorrecta");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "100px 200px",
        padding: "32px",
        borderRadius: "4px",
        border: "1px solid gray",
      }}
    >
      <h1>Login</h1>
      <input
        onChange={e => setUsuario(e.target.value)}
        value={usuario}
        placeholder="Usuario"
        style={{ marginBottom: "16px" }}
      />
      <input
        onChange={e => setClave(e.target.value)}
        value={clave}
        type="password"
        placeholder="Contraseña"
        style={{ marginBottom: "16px" }}
      />
      <Button onClick={handleLogin}>Ingresar</Button>
    </div>
  );
};

function App() {
  const [state, setState] = useState(JSON.parse(window.localStorage.getItem("estado")));
  const [showReporte, setShowReporte] = useState(false);
  const [showCalc, setShowCalc] = useState(false);
  const [mostrarDolares, setMostrarDolares] = useState(false);
  const [bsPorDolar, setBsPorDolar] = useState(500000);
  const [logged, setLogged] = useState(false);

  let ventaMasAltaId = -1;

  state.ventas.forEach((venta, i) => {
    if (i === 0) ventaMasAltaId = venta.id;
    else {
      if (Number(state.ventas.find(v => v.id === ventaMasAltaId).totalBolivares) < Number(venta.totalBolivares)) {
        ventaMasAltaId = venta.id;
      }
    }
  });

  const ventaMasAlta = state.ventas.find(v => v.id === ventaMasAltaId);

  let ventaMasBajaId = -1;

  state.ventas.forEach((venta, i) => {
    if (i === 0) ventaMasBajaId = venta.id;
    else {
      if (Number(state.ventas.find(v => v.id === ventaMasBajaId).totalBolivares) > Number(venta.totalBolivares)) {
        ventaMasBajaId = venta.id;
      }
    }
  });

  const ventaMasBaja = state.ventas.find(v => v.id === ventaMasBajaId);

  const totalGanancias = state.ventas.reduce((acc, venta) => {
    return acc + Number(venta.totalBolivares);
  }, 0);

  window.localStorage.setItem("estado", JSON.stringify(state));

  const toggleDolares = () => {
    if (!mostrarDolares) {
      setBsPorDolar(prompt("Cuantos bolivares vale cada dolar?"));
      setMostrarDolares(true);
    } else setMostrarDolares(false);
  };

  return (
    <estadoContext.Provider value={[state, setState]}>
      {logged ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button style={{ marginRight: "16px" }} onClick={() => setShowReporte(true)}>
              Generar Reporte General
            </Button>
            <Button onClick={() => setShowCalc(true)}>Calculadora</Button>
          </div>

          <Modal show={showReporte} onHide={() => setShowReporte(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Reporte General</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Total clientes: {state.clientes.length}</h3>
              <h3>Total empleados: {state.empleados.length}</h3>
              <h3>Total ventas: {state.ventas.length}</h3>
              <h3>Total comidas: {state.comidas.length}</h3>
              <hr />
              <h3>
                Venta mas alta:{" "}
                {mostrarDolares ? (ventaMasAlta?.totalBolivares / bsPorDolar).toFixed(2) : ventaMasAlta?.totalBolivares}{" "}
                {mostrarDolares ? "$" : "Bs"}
              </h3>
              <h3>
                Venta mas baja:{" "}
                {mostrarDolares ? (ventaMasBaja?.totalBolivares / bsPorDolar).toFixed(2) : ventaMasBaja?.totalBolivares}{" "}
                {mostrarDolares ? "$" : "Bs"}
              </h3>
              <h3>
                Total ganancias: {mostrarDolares ? (totalGanancias / bsPorDolar).toFixed(2) : totalGanancias}{" "}
                {mostrarDolares ? "$" : "Bs"}
              </h3>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={toggleDolares}>Mostrar montos en {mostrarDolares ? "bolivares" : "dolares"}</Button>
              <Button variant="secondary" onClick={() => setShowReporte(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showCalc} onHide={() => setShowCalc(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Calculadora</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Calculator />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowCalc(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          <Clientes />
          <Empleados />
          <Ventas />
          <Comidas />
        </>
      ) : (
        <Login setLogged={setLogged} />
      )}
    </estadoContext.Provider>
  );
}

export default App;
