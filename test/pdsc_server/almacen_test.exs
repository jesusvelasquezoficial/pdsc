defmodule PdscServer.AlmacenTest do
  use PdscServer.DataCase

  alias PdscServer.Almacen

  describe "productos" do
    alias PdscServer.Almacen.Producto

    @valid_attrs %{descripcion: "some descripcion", distribuidor: "some distribuidor", marca: "some marca", nombre: "some nombre", presentacion: "some presentacion"}
    @update_attrs %{descripcion: "some updated descripcion", distribuidor: "some updated distribuidor", marca: "some updated marca", nombre: "some updated nombre", presentacion: "some updated presentacion"}
    @invalid_attrs %{descripcion: nil, distribuidor: nil, marca: nil, nombre: nil, presentacion: nil}

    def producto_fixture(attrs \\ %{}) do
      {:ok, producto} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Almacen.create_producto()

      producto
    end

    test "list_productos/0 returns all productos" do
      producto = producto_fixture()
      assert Almacen.list_productos() == [producto]
    end

    test "get_producto!/1 returns the producto with given id" do
      producto = producto_fixture()
      assert Almacen.get_producto!(producto.id) == producto
    end

    test "create_producto/1 with valid data creates a producto" do
      assert {:ok, %Producto{} = producto} = Almacen.create_producto(@valid_attrs)
      assert producto.descripcion == "some descripcion"
      assert producto.distribuidor == "some distribuidor"
      assert producto.marca == "some marca"
      assert producto.nombre == "some nombre"
      assert producto.presentacion == "some presentacion"
    end

    test "create_producto/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Almacen.create_producto(@invalid_attrs)
    end

    test "update_producto/2 with valid data updates the producto" do
      producto = producto_fixture()
      assert {:ok, %Producto{} = producto} = Almacen.update_producto(producto, @update_attrs)
      assert producto.descripcion == "some updated descripcion"
      assert producto.distribuidor == "some updated distribuidor"
      assert producto.marca == "some updated marca"
      assert producto.nombre == "some updated nombre"
      assert producto.presentacion == "some updated presentacion"
    end

    test "update_producto/2 with invalid data returns error changeset" do
      producto = producto_fixture()
      assert {:error, %Ecto.Changeset{}} = Almacen.update_producto(producto, @invalid_attrs)
      assert producto == Almacen.get_producto!(producto.id)
    end

    test "delete_producto/1 deletes the producto" do
      producto = producto_fixture()
      assert {:ok, %Producto{}} = Almacen.delete_producto(producto)
      assert_raise Ecto.NoResultsError, fn -> Almacen.get_producto!(producto.id) end
    end

    test "change_producto/1 returns a producto changeset" do
      producto = producto_fixture()
      assert %Ecto.Changeset{} = Almacen.change_producto(producto)
    end
  end
end
