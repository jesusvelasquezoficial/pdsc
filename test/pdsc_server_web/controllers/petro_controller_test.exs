defmodule PdscServerWeb.PetroControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Petro

  @create_attrs %{
    bolivares: "some bolivares",
    fecha: "some fecha"
  }
  @update_attrs %{
    bolivares: "some updated bolivares",
    fecha: "some updated fecha"
  }
  @invalid_attrs %{bolivares: nil, fecha: nil}

  def fixture(:petro) do
    {:ok, petro} = Tasas.create_petro(@create_attrs)
    petro
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all petro", %{conn: conn} do
      conn = get(conn, Routes.petro_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create petro" do
    test "renders petro when data is valid", %{conn: conn} do
      conn = post(conn, Routes.petro_path(conn, :create), petro: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.petro_path(conn, :show, id))

      assert %{
               "id" => id,
               "bolivares" => "some bolivares",
               "fecha" => "some fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.petro_path(conn, :create), petro: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update petro" do
    setup [:create_petro]

    test "renders petro when data is valid", %{conn: conn, petro: %Petro{id: id} = petro} do
      conn = put(conn, Routes.petro_path(conn, :update, petro), petro: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.petro_path(conn, :show, id))

      assert %{
               "id" => id,
               "bolivares" => "some updated bolivares",
               "fecha" => "some updated fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, petro: petro} do
      conn = put(conn, Routes.petro_path(conn, :update, petro), petro: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete petro" do
    setup [:create_petro]

    test "deletes chosen petro", %{conn: conn, petro: petro} do
      conn = delete(conn, Routes.petro_path(conn, :delete, petro))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.petro_path(conn, :show, petro))
      end
    end
  end

  defp create_petro(_) do
    petro = fixture(:petro)
    {:ok, petro: petro}
  end
end
