defmodule PdscServer.SeguimientoTest do
  use PdscServer.DataCase

  alias PdscServer.Seguimiento

  describe "precioproducto" do
    alias PdscServer.Seguimiento.PrecioProducto

    @valid_attrs %{fecha: "some fecha", idproducto: 42, precio: 42}
    @update_attrs %{fecha: "some updated fecha", idproducto: 43, precio: 43}
    @invalid_attrs %{fecha: nil, idproducto: nil, precio: nil}

    def precio_producto_fixture(attrs \\ %{}) do
      {:ok, precio_producto} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Seguimiento.create_precio_producto()

      precio_producto
    end

    test "list_precioproducto/0 returns all precioproducto" do
      precio_producto = precio_producto_fixture()
      assert Seguimiento.list_precioproducto() == [precio_producto]
    end

    test "get_precio_producto!/1 returns the precio_producto with given id" do
      precio_producto = precio_producto_fixture()
      assert Seguimiento.get_precio_producto!(precio_producto.id) == precio_producto
    end

    test "create_precio_producto/1 with valid data creates a precio_producto" do
      assert {:ok, %PrecioProducto{} = precio_producto} = Seguimiento.create_precio_producto(@valid_attrs)
      assert precio_producto.fecha == "some fecha"
      assert precio_producto.idproducto == 42
      assert precio_producto.precio == 42
    end

    test "create_precio_producto/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Seguimiento.create_precio_producto(@invalid_attrs)
    end

    test "update_precio_producto/2 with valid data updates the precio_producto" do
      precio_producto = precio_producto_fixture()
      assert {:ok, %PrecioProducto{} = precio_producto} = Seguimiento.update_precio_producto(precio_producto, @update_attrs)
      assert precio_producto.fecha == "some updated fecha"
      assert precio_producto.idproducto == 43
      assert precio_producto.precio == 43
    end

    test "update_precio_producto/2 with invalid data returns error changeset" do
      precio_producto = precio_producto_fixture()
      assert {:error, %Ecto.Changeset{}} = Seguimiento.update_precio_producto(precio_producto, @invalid_attrs)
      assert precio_producto == Seguimiento.get_precio_producto!(precio_producto.id)
    end

    test "delete_precio_producto/1 deletes the precio_producto" do
      precio_producto = precio_producto_fixture()
      assert {:ok, %PrecioProducto{}} = Seguimiento.delete_precio_producto(precio_producto)
      assert_raise Ecto.NoResultsError, fn -> Seguimiento.get_precio_producto!(precio_producto.id) end
    end

    test "change_precio_producto/1 returns a precio_producto changeset" do
      precio_producto = precio_producto_fixture()
      assert %Ecto.Changeset{} = Seguimiento.change_precio_producto(precio_producto)
    end
  end
end
