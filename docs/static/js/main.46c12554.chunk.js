(this.webpackJsonpsi2=this.webpackJsonpsi2||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(11),o=n.n(i),s=(n(23),n(14)),l=n(4),j=n(2),u=(n(24),n(25),n(13)),d=n(3),b=n(10),O=n(17),h={clientes:[{id:0,nombre:"Juan",apellido:"Camacho",sexo:"Masculino",direccion:"Naguanagua",telefono:"04244438768"},{id:1,nombre:"Manuel",apellido:"Garcia",sexo:"Masculino",direccion:"San Diego",telefono:"04248745321"},{id:2,nombre:"Elena",apellido:"Ojeda",sexo:"Femenino",direccion:"Valencia",telefono:"04243856424"},{id:3,nombre:"Pablo",apellido:"Francis",sexo:"Masculino",direccion:"Naguanagua",telefono:"04169693243"},{id:4,nombre:"Wilmer",apellido:"Herna",sexo:"Masculino",direccion:"Santa Rosa",telefono:"04125565643"}],empleados:[{id:0,nombre:"Juan",apellido:"Camacho",sexo:"Masculino",direccion:"Naguanagua",telefono:"04244438768",clave:"qwertyytrewq"},{id:1,nombre:"Diana",apellido:"Abreu",sexo:"Femenino",direccion:"Naguanagua",telefono:"04248987687",clave:"fbhsdbvfjdbf"},{id:2,nombre:"Daniel",apellido:"Jimenez",sexo:"Masculino",direccion:"Isabelica",telefono:"04146578767",clave:"dfbwfuiweuifwue"}],ventas:[{id:0,dia:"13",mes:"9",ano:"2020",totalBolivares:"15367322"},{id:1,dia:"23",mes:"8",ano:"2019",totalBolivares:"234632478"},{id:2,dia:"14",mes:"10",ano:"2020",totalBolivares:"47238732"},{id:3,dia:"4",mes:"11",ano:"2019",totalBolivares:"23472378"},{id:4,dia:"10",mes:"2",ano:"2020",totalBolivares:"324723677"},{id:5,dia:"9",mes:"3",ano:"2018",totalBolivares:"2384892378"},{id:6,dia:"9",mes:"6",ano:"2020",totalBolivares:"237428"},{id:7,dia:"14",mes:"1",ano:"2020",totalBolivares:"3822389"},{id:8,dia:"9",mes:"8",ano:"2020",totalBolivares:"12127823"}],comidas:[{id:0,nombre:"Empanada",descripcion:"Masa frita de harina de maiz",precioBolivares:"500000"},{id:1,nombre:"Hamburguesa",descripcion:"Carne asada con pan y salsas",precioBolivares:"1000000"},{id:2,nombre:"Camaron",descripcion:"Animal marino",precioBolivares:"500000"},{id:3,nombre:"Dona",descripcion:"Masa dulce horneada",precioBolivares:"700000"},{id:4,nombre:"Pizza",descripcion:"Masa horneada con salsa y queso",precioBolivares:"1500000"},{id:5,nombre:"Sushi",descripcion:"Pescado envuelto en arroz",precioBolivares:"2000000"}]};window.localStorage.getItem("estado")||window.localStorage.setItem("estado",JSON.stringify(h));var x=Object(a.createContext)(),f=function(e){var t=e.id,n=e.nombre,r=e.apellido,i=e.sexo,o=e.direccion,s=e.telefono,u=e.show,b=Object(a.useState)(!1),O=Object(j.a)(b,2),h=O[0],f=O[1],g=Object(a.useContext)(x),p=Object(j.a)(g,2),v=(p[0],p[1]),m=Object(a.useState)(n),C=Object(j.a)(m,2),S=C[0],w=C[1],B=Object(a.useState)(r),L=Object(j.a)(B,2),y=L[0],k=L[1],N=Object(a.useState)(i),F=Object(j.a)(N,2),A=F[0],W=F[1],T=Object(a.useState)(o),V=Object(j.a)(T,2),I=V[0],q=V[1],M=Object(a.useState)(s),D=Object(j.a)(M,2),E=D[0],R=D[1];return u?h?Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return w(e.target.value)},defaultValue:n})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return k(e.target.value)},defaultValue:r})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return W(e.target.value)},defaultValue:i})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return q(e.target.value)},defaultValue:o})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return R(e.target.value)},defaultValue:s})}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){window.confirm("Seguro que quiere modificar el cliente de id=".concat(t))&&v((function(e){var n=e.clientes.map((function(e){return e.id===t?{id:t,nombre:S,apellido:y,sexo:A,direccion:I,telefono:E}:e}));return Object(l.a)(Object(l.a)({},e),{},{clientes:n})})),f(!1)},children:"Aceptar"}),Object(c.jsx)(d.a,{onClick:function(){return f(!1)},children:"Cancelar"})]})]}):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:o}),Object(c.jsx)("td",{children:s}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){return f(!0)},children:"Modificar"}),Object(c.jsx)(d.a,{onClick:function(){window.confirm("Seguro que quiere eliminar el cliente de id=".concat(t))&&v((function(e){var n=e.clientes.filter((function(e){return e.id!==t}));return Object(l.a)(Object(l.a)({},e),{},{clientes:n})}))},children:"Eliminar"})]})]}):null},g=function(){var e=Object(a.useContext)(x),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),b=o[0],O=o[1],h=Object(a.useState)(""),g=Object(j.a)(h,2),p=g[0],v=g[1],m=Object(a.useState)(""),C=Object(j.a)(m,2),S=C[0],w=C[1],B=Object(a.useState)(""),L=Object(j.a)(B,2),y=L[0],k=L[1],N=Object(a.useState)(""),F=Object(j.a)(N,2),A=F[0],W=F[1],T=Object(a.useState)(""),V=Object(j.a)(T,2),I=V[0],q=V[1],M=Object(a.useState)(""),D=Object(j.a)(M,2),E=D[0],R=D[1],P=Object(a.useState)(""),J=Object(j.a)(P,2),H=J[0],z=J[1],G=Object(a.useState)(""),$=Object(j.a)(G,2),U=$[0],K=$[1],Q=Object(a.useState)(""),X=Object(j.a)(Q,2),Y=X[0],Z=X[1],_=Object(a.useState)(""),ee=Object(j.a)(_,2),te=ee[0],ne=ee[1],ce=Object(a.useState)(""),ae=Object(j.a)(ce,2),re=ae[0],ie=ae[1],oe=n.clientes.map((function(e){return String(e.id).toLowerCase().startsWith(E.toLowerCase())&&e.nombre.toLowerCase().startsWith(H.toLowerCase())&&e.apellido.toLowerCase().startsWith(U.toLowerCase())&&e.sexo.toLowerCase().startsWith(Y.toLowerCase())&&e.direccion.toLowerCase().startsWith(te.toLowerCase())&&e.telefono.toLowerCase().startsWith(re.toLowerCase())?e.id:null}));oe=oe.filter((function(e){return null!==e}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Clientes"}),b?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return v(e.target.value)},placeholder:"Nuevo Nombre"}),Object(c.jsx)("input",{onChange:function(e){return w(e.target.value)},placeholder:"Nuevo Apellido"}),Object(c.jsx)("input",{onChange:function(e){return k(e.target.value)},placeholder:"Nuevo Sexo"}),Object(c.jsx)("input",{onChange:function(e){return W(e.target.value)},placeholder:"Nueva Direccion"}),Object(c.jsx)("input",{onChange:function(e){return q(e.target.value)},placeholder:"Nuevo Telefono"}),Object(c.jsx)(d.a,{style:{marginInline:"16px"},onClick:function(){if(p&&S&&y&&A&&I){var e=0===n.clientes.length?0:n.clientes[n.clientes.length-1].id+1,t=[].concat(Object(s.a)(n.clientes),[{id:e,nombre:p,apellido:S,sexo:y,direccion:A,telefono:I}]);r((function(e){return Object(l.a)(Object(l.a)({},e),{},{clientes:t})})),O(!1)}else alert("Todos los campos deben ser llenados")},children:"Agregar"}),Object(c.jsx)(d.a,{onClick:function(){return O(!1)},children:"Cancelar"})]}):Object(c.jsx)(d.a,{onClick:function(){return O(!0)},children:"Agregar cliente nuevo"}),Object(c.jsx)("br",{}),b?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return R(e.target.value)},placeholder:"Buscar Id"}),Object(c.jsx)("input",{onChange:function(e){return z(e.target.value)},placeholder:"Buscar Nombre"}),Object(c.jsx)("input",{onChange:function(e){return K(e.target.value)},placeholder:"Buscar Apellido"}),Object(c.jsx)("input",{onChange:function(e){return Z(e.target.value)},placeholder:"Buscar Sexo"}),Object(c.jsx)("input",{onChange:function(e){return ne(e.target.value)},placeholder:"Buscar Direccion"}),Object(c.jsx)("input",{onChange:function(e){return ie(e.target.value)},placeholder:"Buscar Telefono"})]}),Object(c.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Id"}),Object(c.jsx)("th",{children:"Nombre"}),Object(c.jsx)("th",{children:"Apellido"}),Object(c.jsx)("th",{children:"Sexo"}),Object(c.jsx)("th",{children:"Direccion"}),Object(c.jsx)("th",{children:"Telefono"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:n.clientes.map((function(e){return Object(a.createElement)(f,Object(l.a)(Object(l.a)({show:oe.includes(e.id)},e),{},{key:e.id}))}))})]})]})},p=function(e){var t=e.id,n=e.nombre,r=e.apellido,i=e.sexo,o=e.direccion,s=e.telefono,u=e.clave,b=e.show,O=Object(a.useState)(!1),h=Object(j.a)(O,2),f=h[0],g=h[1],p=Object(a.useContext)(x),v=Object(j.a)(p,2),m=(v[0],v[1]),C=Object(a.useState)(n),S=Object(j.a)(C,2),w=S[0],B=S[1],L=Object(a.useState)(r),y=Object(j.a)(L,2),k=y[0],N=y[1],F=Object(a.useState)(i),A=Object(j.a)(F,2),W=A[0],T=A[1],V=Object(a.useState)(o),I=Object(j.a)(V,2),q=I[0],M=I[1],D=Object(a.useState)(s),E=Object(j.a)(D,2),R=E[0],P=E[1],J=Object(a.useState)(u),H=Object(j.a)(J,2),z=H[0],G=H[1];return b?f?Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return B(e.target.value)},defaultValue:n})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return N(e.target.value)},defaultValue:r})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return T(e.target.value)},defaultValue:i})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return M(e.target.value)},defaultValue:o})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return P(e.target.value)},defaultValue:s})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return G(e.target.value)},defaultValue:u})}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){window.confirm("Seguro que quiere modificar el empleado de id=".concat(t))&&m((function(e){var n=e.empleados.map((function(e){return e.id===t?{id:t,nombre:w,apellido:k,sexo:W,direccion:q,telefono:R,clave:z}:e}));return Object(l.a)(Object(l.a)({},e),{},{empleados:n})})),g(!1)},children:"Aceptar"}),Object(c.jsx)(d.a,{onClick:function(){return g(!1)},children:"Cancelar"})]})]}):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:o}),Object(c.jsx)("td",{children:s}),Object(c.jsx)("td",{children:u}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){return g(!0)},children:"Modificar"}),Object(c.jsx)(d.a,{onClick:function(){window.confirm("Seguro que quiere eliminar el empleado de id=".concat(t))&&m((function(e){var n=e.empleados.filter((function(e){return e.id!==t}));return Object(l.a)(Object(l.a)({},e),{},{empleados:n})}))},children:"Eliminar"})]})]}):null},v=function(){var e=Object(a.useContext)(x),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),b=o[0],O=o[1],h=Object(a.useState)(""),f=Object(j.a)(h,2),g=f[0],v=f[1],m=Object(a.useState)(""),C=Object(j.a)(m,2),S=C[0],w=C[1],B=Object(a.useState)(""),L=Object(j.a)(B,2),y=L[0],k=L[1],N=Object(a.useState)(""),F=Object(j.a)(N,2),A=F[0],W=F[1],T=Object(a.useState)(""),V=Object(j.a)(T,2),I=V[0],q=V[1],M=Object(a.useState)(""),D=Object(j.a)(M,2),E=D[0],R=D[1],P=Object(a.useState)(""),J=Object(j.a)(P,2),H=J[0],z=J[1],G=Object(a.useState)(""),$=Object(j.a)(G,2),U=$[0],K=$[1],Q=Object(a.useState)(""),X=Object(j.a)(Q,2),Y=X[0],Z=X[1],_=Object(a.useState)(""),ee=Object(j.a)(_,2),te=ee[0],ne=ee[1],ce=Object(a.useState)(""),ae=Object(j.a)(ce,2),re=ae[0],ie=ae[1],oe=Object(a.useState)(""),se=Object(j.a)(oe,2),le=se[0],je=se[1],ue=Object(a.useState)(""),de=Object(j.a)(ue,2),be=de[0],Oe=de[1],he=n.empleados.map((function(e){return String(e.id).toLowerCase().startsWith(H.toLowerCase())&&e.nombre.toLowerCase().startsWith(U.toLowerCase())&&e.apellido.toLowerCase().startsWith(Y.toLowerCase())&&e.sexo.toLowerCase().startsWith(te.toLowerCase())&&e.direccion.toLowerCase().startsWith(re.toLowerCase())&&e.telefono.toLowerCase().startsWith(le.toLowerCase())&&e.clave.toLowerCase().startsWith(be.toLowerCase())?e.id:null}));he=he.filter((function(e){return null!==e}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Empleados"}),b?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return v(e.target.value)},placeholder:"Nuevo Nombre"}),Object(c.jsx)("input",{onChange:function(e){return w(e.target.value)},placeholder:"Nuevo Apellido"}),Object(c.jsx)("input",{onChange:function(e){return k(e.target.value)},placeholder:"Nuevo Sexo"}),Object(c.jsx)("input",{onChange:function(e){return W(e.target.value)},placeholder:"Nueva Direccion"}),Object(c.jsx)("input",{onChange:function(e){return q(e.target.value)},placeholder:"Nuevo Telefono"}),Object(c.jsx)("input",{onChange:function(e){return R(e.target.value)},placeholder:"Nueva Clave"}),Object(c.jsx)(d.a,{style:{marginInline:"16px"},onClick:function(){if(g&&S&&y&&A&&I&&E){var e=0===n.empleados.length?0:n.empleados[n.empleados.length-1].id+1,t=[].concat(Object(s.a)(n.empleados),[{id:e,nombre:g,apellido:S,sexo:y,direccion:A,telefono:I,clave:E}]);r((function(e){return Object(l.a)(Object(l.a)({},e),{},{empleados:t})})),O(!1)}else alert("Todos los campos deben ser llenados")},children:"Agregar"}),Object(c.jsx)(d.a,{onClick:function(){return O(!1)},children:"Cancelar"})]}):Object(c.jsx)(d.a,{onClick:function(){return O(!0)},children:"Agregar empleado nuevo"}),Object(c.jsx)("br",{}),b?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return z(e.target.value)},placeholder:"Buscar Id"}),Object(c.jsx)("input",{onChange:function(e){return K(e.target.value)},placeholder:"Buscar Nombre"}),Object(c.jsx)("input",{onChange:function(e){return Z(e.target.value)},placeholder:"Buscar Apellido"}),Object(c.jsx)("input",{onChange:function(e){return ne(e.target.value)},placeholder:"Buscar Sexo"}),Object(c.jsx)("input",{onChange:function(e){return ie(e.target.value)},placeholder:"Buscar Direccion"}),Object(c.jsx)("input",{onChange:function(e){return je(e.target.value)},placeholder:"Buscar Telefono"}),Object(c.jsx)("input",{onChange:function(e){return Oe(e.target.value)},placeholder:"Buscar Clave"})]}),Object(c.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Id"}),Object(c.jsx)("th",{children:"Nombre"}),Object(c.jsx)("th",{children:"Apellido"}),Object(c.jsx)("th",{children:"Sexo"}),Object(c.jsx)("th",{children:"Direccion"}),Object(c.jsx)("th",{children:"Telefono"}),Object(c.jsx)("th",{children:"Clave"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:n.empleados.map((function(e){return Object(a.createElement)(p,Object(l.a)(Object(l.a)({show:he.includes(e.id)},e),{},{key:e.id}))}))})]})]})},m=function(e){var t=e.id,n=e.dia,r=e.mes,i=e.ano,o=e.totalBolivares,s=e.show,u=Object(a.useState)(!1),b=Object(j.a)(u,2),O=b[0],h=b[1],f=Object(a.useContext)(x),g=Object(j.a)(f,2),p=(g[0],g[1]),v=Object(a.useState)(n),m=Object(j.a)(v,2),C=m[0],S=m[1],w=Object(a.useState)(r),B=Object(j.a)(w,2),L=B[0],y=B[1],k=Object(a.useState)(i),N=Object(j.a)(k,2),F=N[0],A=N[1],W=Object(a.useState)(o),T=Object(j.a)(W,2),V=T[0],I=T[1];return s?O?Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return S(e.target.value)},defaultValue:n})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return y(e.target.value)},defaultValue:r})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return A(e.target.value)},defaultValue:i})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return I(e.target.value)},defaultValue:o})}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){window.confirm("Seguro que quiere modificar la venta de id=".concat(t))&&p((function(e){var n=e.ventas.map((function(e){return e.id===t?{id:t,dia:C,mes:L,ano:F,totalBolivares:V}:e}));return Object(l.a)(Object(l.a)({},e),{},{ventas:n})})),h(!1)},children:"Aceptar"}),Object(c.jsx)(d.a,{onClick:function(){return h(!1)},children:"Cancelar"})]})]}):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:o}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){return h(!0)},children:"Modificar"}),Object(c.jsx)(d.a,{onClick:function(){window.confirm("Seguro que quiere eliminar la venta de id=".concat(t))&&p((function(e){var n=e.ventas.filter((function(e){return e.id!==t}));return Object(l.a)(Object(l.a)({},e),{},{ventas:n})}))},children:"Eliminar"})]})]}):null},C=function(){var e=Object(a.useContext)(x),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),b=o[0],O=o[1],h=Object(a.useState)(""),f=Object(j.a)(h,2),g=f[0],p=f[1],v=Object(a.useState)(""),C=Object(j.a)(v,2),S=C[0],w=C[1],B=Object(a.useState)(""),L=Object(j.a)(B,2),y=L[0],k=L[1],N=Object(a.useState)(""),F=Object(j.a)(N,2),A=F[0],W=F[1],T=Object(a.useState)(""),V=Object(j.a)(T,2),I=V[0],q=V[1],M=Object(a.useState)(""),D=Object(j.a)(M,2),E=D[0],R=D[1],P=Object(a.useState)(""),J=Object(j.a)(P,2),H=J[0],z=J[1],G=Object(a.useState)(""),$=Object(j.a)(G,2),U=$[0],K=$[1],Q=Object(a.useState)(""),X=Object(j.a)(Q,2),Y=X[0],Z=X[1],_=n.ventas.map((function(e){return String(e.id).toLowerCase().startsWith(I.toLowerCase())&&e.dia.toLowerCase().startsWith(E.toLowerCase())&&e.mes.toLowerCase().startsWith(H.toLowerCase())&&e.ano.toLowerCase().startsWith(U.toLowerCase())&&e.totalBolivares.toLowerCase().startsWith(Y.toLowerCase())?e.id:null}));_=_.filter((function(e){return null!==e}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Ventas"}),b?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return p(e.target.value)},placeholder:"Nuevo Dia"}),Object(c.jsx)("input",{onChange:function(e){return w(e.target.value)},placeholder:"Nuevo Mes"}),Object(c.jsx)("input",{onChange:function(e){return k(e.target.value)},placeholder:"Nuevo A\xf1o"}),Object(c.jsx)("input",{onChange:function(e){return W(e.target.value)},placeholder:"Nuevo Total Bolivares"}),Object(c.jsx)(d.a,{style:{marginInline:"16px"},onClick:function(){if(g&&S&&y&&A){var e=0===n.ventas.length?0:n.ventas[n.ventas.length-1].id+1,t=[].concat(Object(s.a)(n.ventas),[{id:e,dia:g,mes:S,ano:y,totalBolivares:A}]);r((function(e){return Object(l.a)(Object(l.a)({},e),{},{ventas:t})})),O(!1)}else alert("Todos los campos deben ser llenados")},children:"Agregar"}),Object(c.jsx)(d.a,{onClick:function(){return O(!1)},children:"Cancelar"})]}):Object(c.jsx)(d.a,{onClick:function(){return O(!0)},children:"Agregar venta nueva"}),Object(c.jsx)("br",{}),b?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return q(e.target.value)},placeholder:"Buscar Id"}),Object(c.jsx)("input",{onChange:function(e){return R(e.target.value)},placeholder:"Buscar Dia"}),Object(c.jsx)("input",{onChange:function(e){return z(e.target.value)},placeholder:"Buscar Mes"}),Object(c.jsx)("input",{onChange:function(e){return K(e.target.value)},placeholder:"Buscar A\xf1o"}),Object(c.jsx)("input",{onChange:function(e){return Z(e.target.value)},placeholder:"Buscar Total Bolivares"})]}),Object(c.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Id"}),Object(c.jsx)("th",{children:"Dia"}),Object(c.jsx)("th",{children:"Mes"}),Object(c.jsx)("th",{children:"A\xf1o"}),Object(c.jsx)("th",{children:"Total Bolivares"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:n.ventas.map((function(e){return Object(a.createElement)(m,Object(l.a)(Object(l.a)({show:_.includes(e.id)},e),{},{key:e.id}))}))})]})]})},S=function(e){var t=e.id,n=e.nombre,r=e.descripcion,i=e.precioBolivares,o=e.show,s=Object(a.useState)(!1),u=Object(j.a)(s,2),b=u[0],O=u[1],h=Object(a.useContext)(x),f=Object(j.a)(h,2),g=(f[0],f[1]),p=Object(a.useState)(n),v=Object(j.a)(p,2),m=v[0],C=v[1],S=Object(a.useState)(r),w=Object(j.a)(S,2),B=w[0],L=w[1],y=Object(a.useState)(i),k=Object(j.a)(y,2),N=k[0],F=k[1];return o?b?Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return C(e.target.value)},defaultValue:n})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return L(e.target.value)},defaultValue:r})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{onChange:function(e){return F(e.target.value)},defaultValue:i})}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){window.confirm("Seguro que quiere modificar la comida de id=".concat(t))&&g((function(e){var n=e.comidas.map((function(e){return e.id===t?{id:t,nombre:m,descripcion:B,precioBolivares:N}:e}));return Object(l.a)(Object(l.a)({},e),{},{comidas:n})})),O(!1)},children:"Aceptar"}),Object(c.jsx)(d.a,{onClick:function(){return O(!1)},children:"Cancelar"})]})]}):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:i}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){return O(!0)},children:"Modificar"}),Object(c.jsx)(d.a,{onClick:function(){window.confirm("Seguro que quiere eliminar la comida de id=".concat(t))&&g((function(e){var n=e.comidas.filter((function(e){return e.id!==t}));return Object(l.a)(Object(l.a)({},e),{},{comidas:n})}))},children:"Eliminar"})]})]}):null},w=function(){var e=Object(a.useContext)(x),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),b=o[0],O=o[1],h=Object(a.useState)(""),f=Object(j.a)(h,2),g=f[0],p=f[1],v=Object(a.useState)(""),m=Object(j.a)(v,2),C=m[0],w=m[1],B=Object(a.useState)(""),L=Object(j.a)(B,2),y=L[0],k=L[1],N=Object(a.useState)(""),F=Object(j.a)(N,2),A=F[0],W=F[1],T=Object(a.useState)(""),V=Object(j.a)(T,2),I=V[0],q=V[1],M=Object(a.useState)(""),D=Object(j.a)(M,2),E=D[0],R=D[1],P=Object(a.useState)(""),J=Object(j.a)(P,2),H=J[0],z=J[1],G=n.comidas.map((function(e){return String(e.id).toLowerCase().startsWith(A.toLowerCase())&&e.nombre.toLowerCase().startsWith(I.toLowerCase())&&e.descripcion.toLowerCase().startsWith(E.toLowerCase())&&e.precioBolivares.toLowerCase().startsWith(H.toLowerCase())?e.id:null}));G=G.filter((function(e){return null!==e}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Comidas"}),b?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return p(e.target.value)},placeholder:"Nuevo Nombre"}),Object(c.jsx)("input",{onChange:function(e){return w(e.target.value)},placeholder:"Nueva Descripcion"}),Object(c.jsx)("input",{onChange:function(e){return k(e.target.value)},placeholder:"Nuevo Precio Bolivares"}),Object(c.jsx)(d.a,{style:{marginInline:"16px"},onClick:function(){if(g&&C&&y){var e=0===n.comidas.length?0:n.comidas[n.comidas.length-1].id+1,t=[].concat(Object(s.a)(n.comidas),[{id:e,nombre:g,descripcion:C,precioBolivares:y}]);r((function(e){return Object(l.a)(Object(l.a)({},e),{},{comidas:t})})),O(!1)}else alert("Todos los campos deben ser llenados")},children:"Agregar"}),Object(c.jsx)(d.a,{onClick:function(){return O(!1)},children:"Cancelar"})]}):Object(c.jsx)(d.a,{onClick:function(){return O(!0)},children:"Agregar comida nueva"}),Object(c.jsx)("br",{}),b?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{onChange:function(e){return W(e.target.value)},placeholder:"Buscar Id"}),Object(c.jsx)("input",{onChange:function(e){return q(e.target.value)},placeholder:"Buscar Nombre"}),Object(c.jsx)("input",{onChange:function(e){return R(e.target.value)},placeholder:"Buscar Descripcion"}),Object(c.jsx)("input",{onChange:function(e){return z(e.target.value)},placeholder:"Buscar Precio Bolivares"})]}),Object(c.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Id"}),Object(c.jsx)("th",{children:"Nombre"}),Object(c.jsx)("th",{children:"Descripcion"}),Object(c.jsx)("th",{children:"Precio Bolivares"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:n.comidas.map((function(e){return Object(a.createElement)(S,Object(l.a)(Object(l.a)({show:G.includes(e.id)},e),{},{key:e.id}))}))})]})]})},B=function(e){var t=e.setLogged,n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)(""),l=Object(j.a)(s,2),u=l[0],b=l[1];return Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"100px 200px",padding:"32px",borderRadius:"4px",border:"1px solid gray"},children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsx)("input",{onChange:function(e){return o(e.target.value)},value:i,placeholder:"Usuario",style:{marginBottom:"16px"}}),Object(c.jsx)("input",{onChange:function(e){return b(e.target.value)},value:u,type:"password",placeholder:"Contrase\xf1a",style:{marginBottom:"16px"}}),Object(c.jsx)(d.a,{onClick:function(){"prueba"===i&&"clave1234"===u?t(!0):alert("Contrase\xf1a incorrecta")},children:"Ingresar"})]})};var L=function(){var e=Object(a.useState)(JSON.parse(window.localStorage.getItem("estado"))),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(!1),h=Object(j.a)(u,2),f=h[0],p=h[1],m=Object(a.useState)(!1),S=Object(j.a)(m,2),L=S[0],y=S[1],k=Object(a.useState)(5e5),N=Object(j.a)(k,2),F=N[0],A=N[1],W=Object(a.useState)(!1),T=Object(j.a)(W,2),V=T[0],I=T[1],q=-1;n.ventas.forEach((function(e,t){(0===t||Number(n.ventas.find((function(e){return e.id===q})).totalBolivares)<Number(e.totalBolivares))&&(q=e.id)}));var M=n.ventas.find((function(e){return e.id===q})),D=-1;n.ventas.forEach((function(e,t){(0===t||Number(n.ventas.find((function(e){return e.id===D})).totalBolivares)>Number(e.totalBolivares))&&(D=e.id)}));var E=n.ventas.find((function(e){return e.id===D})),R=n.ventas.reduce((function(e,t){return e+Number(t.totalBolivares)}),0);return window.localStorage.setItem("estado",JSON.stringify(n)),Object(c.jsx)(x.Provider,{value:[n,r],children:V?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(c.jsx)(d.a,{style:{marginRight:"16px"},onClick:function(){return l(!0)},children:"Generar Reporte General"}),Object(c.jsx)(d.a,{onClick:function(){return p(!0)},children:"Calculadora"})]}),Object(c.jsxs)(b.a,{show:s,onHide:function(){return l(!1)},children:[Object(c.jsx)(b.a.Header,{closeButton:!0,children:Object(c.jsx)(b.a.Title,{children:"Reporte General"})}),Object(c.jsxs)(b.a.Body,{children:[Object(c.jsxs)("h3",{children:["Total clientes: ",n.clientes.length]}),Object(c.jsxs)("h3",{children:["Total empleados: ",n.empleados.length]}),Object(c.jsxs)("h3",{children:["Total ventas: ",n.ventas.length]}),Object(c.jsxs)("h3",{children:["Total comidas: ",n.comidas.length]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("h3",{children:["Venta mas alta:"," ",L?((null===M||void 0===M?void 0:M.totalBolivares)/F).toFixed(2):null===M||void 0===M?void 0:M.totalBolivares," ",L?"$":"Bs"]}),Object(c.jsxs)("h3",{children:["Venta mas baja:"," ",L?((null===E||void 0===E?void 0:E.totalBolivares)/F).toFixed(2):null===E||void 0===E?void 0:E.totalBolivares," ",L?"$":"Bs"]}),Object(c.jsxs)("h3",{children:["Total ganancias: ",L?(R/F).toFixed(2):R," ",L?"$":"Bs"]})]}),Object(c.jsxs)(b.a.Footer,{children:[Object(c.jsxs)(d.a,{onClick:function(){L?y(!1):(A(prompt("Cuantos bolivares vale cada dolar?")),y(!0))},children:["Mostrar montos en ",L?"bolivares":"dolares"]}),Object(c.jsx)(d.a,{variant:"secondary",onClick:function(){return l(!1)},children:"Cerrar"})]})]}),Object(c.jsxs)(b.a,{show:f,onHide:function(){return p(!1)},children:[Object(c.jsx)(b.a.Header,{closeButton:!0,children:Object(c.jsx)(b.a.Title,{children:"Calculadora"})}),Object(c.jsx)(b.a.Body,{children:Object(c.jsx)(O.a,{})}),Object(c.jsx)(b.a.Footer,{children:Object(c.jsx)(d.a,{variant:"secondary",onClick:function(){return p(!1)},children:"Cerrar"})})]}),Object(c.jsx)(g,{}),Object(c.jsx)(v,{}),Object(c.jsx)(C,{}),Object(c.jsx)(w,{})]}):Object(c.jsx)(B,{setLogged:I})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.46c12554.chunk.js.map