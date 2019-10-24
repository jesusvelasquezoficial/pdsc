defmodule PdscServerWeb.PrecioProductoControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Seguimiento
  alias PdscServer.Seguimiento.PrecioProducto

  @create_attrs %{
    fecha: "some fecha",
    idproducto: 42,
    precio: 42
  }
  @update_attrs %{
    fecha: "some updated fecha",
    idproducto: 43,
    precio: 43
  }
  @invalid_attrs %{fecha: nil, idproducto: nil, precio: nil}

  def fixture(:precio_producto) do
    {:ok, precio_producto} = Seguimiento.create_precio_producto(@create_attrs)
    precio_producto
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all precioproducto", %{conn: conn} do
      conn = get(conn, Routes.precio_producto_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create precio_producto" do
    test "renders precio_producto when data is valid", %{conn: conn} do
      conn = post(conn, Routes.precio_producto_path(conn, :create), precio_producto: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.precio_producto_path(conn, :show, id))

      assert %{
               "id" => id,
               "fecha" => "some fecha",
               "idproducto" => 42,
               "precio" => 42
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.precio_producto_path(conn, :create), precio_producto: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update precio_producto" do
    setup [:create_precio_producto]

    test "renders precio_producto when data is valid", %{conn: conn, precio_producto: %PrecioProducto{id: id} = precio_producto} do
      conn = put(conn, Routes.precio_producto_path(conn, :update, precio_producto), precio_producto: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.precio_producto_path(conn, :show, id))

      assert %{
               "id" => id,
               "fecha" => "some updated fecha",
               "idproducto" => 43,
               "precio" => 43
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, precio_producto: precio_producto} do
      conn = put(conn, Routes.precio_producto_path(conn, :update, precio_producto), precio_producto: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete precio_producto" do
    setup [:create_precio_producto]

    test "deletes chosen precio_producto", %{conn: conn, precio_producto: precio_producto} do
      conn = delete(conn, Routes.precio_producto_path(conn, :delete, precio_producto))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.precio_producto_path(conn, :show, precio_producto))
      end
    end
  end

  defp create_precio_producto(_) do
    precio_producto = fixture(:precio_producto)
    {:ok, precio_producto: precio_producto}
  end
end
